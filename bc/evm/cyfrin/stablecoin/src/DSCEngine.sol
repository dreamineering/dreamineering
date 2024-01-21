// SPDX-License-Identifier: MIT

// Layout of Contract:
// version
// imports
// interfaces, libraries, contracts
// errors
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// view & pure functions

pragma solidity 0.8.19;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

import {DecentralizedStableCoin} from "./DecentralizedStableCoin.sol";

/**
 * @title DSCEngine
 * @author Matt Mischewski
 *
 *
 * @dev The is designed to be as minimal as possible where tokens maintain a 1 token = 1 USD peg.
 *
 * This stablecoin has the properties:
 * - Exogenous Collateral (ETH, BTC)
 * - Dollar Pegged
 * - Algorithmically Stable
 *
 * It is similar to DAI if DAI had, no governance, no fees, and was only back by wETH and wBTC.
 *
 * The DSC system should always be overcollateralized. At no point, should the value of all collateral
 * be less than the $ USD backed value of all the DSC.
 *
 * @notice This contract is the engine of the stablecoin system. It handles all the logic for minting and redeeming DSC,
 * as well as depositing and withdrawing collateral.
 * @notice This contract is VERY loosely basked on the MakerDAO system.
 *
 */

// DEV FLOW NOTES:: when starting out with a contract like this, it is often a good practice to map out the interface first
contract DSCEngine is ReentrancyGuard {
    //////////////////////////////////////
    // ERRORS                           //
    //////////////////////////////////////
    error DSCEngine__TokenAddressesAndPriceFeedAddressesMustBeTheSameLength();
    error DSCEngine__NeedsMoreThanZero();
    error DSCEngine__TokenNotAllowed();
    error DSCEngine__TransferFailed();
    error DSCEngine__MintFailed();
    error DSCEngine__HealthFactorIsBelowMinimum(uint256 healthFactor);

    //////////////////////////////////////
    // STATE VARIABLES                  //
    //////////////////////////////////////
    uint256 private constant MIN_HEALTH_FACTOR = 1;
    uint256 private constant LIQUIDATION_THRESHOLD = 50;
    uint256 private constant LIQUIDATION_DENOMINATOR = 100;

    uint256 private constant PRECISION = 1e18;
    uint256 private constant ADDITIONAL_FEED_PRECISION = 1e10;

    mapping(address token => address priceFeed) private s_priceFeeds;
    mapping(address user => mapping(address token => uint256))
        private s_collateralDeposited;
    mapping(address user => uint256 amountDscMinted) private s_dscMinted;

    // Contract ETH, BTC, MKR set in constructor
    address[] private s_collateralTokens;

    DecentralizedStableCoin private immutable i_dsc;

    //////////////////////////////////////
    // EVENTS                           //
    //////////////////////////////////////
    event CollateralDeposited(
        address indexed user,
        address indexed token,
        uint256 indexed amount
    );
    event CollateralRedeemed(
        address indexed user,
        address indexed token,
        uint256 indexed amount
    );

    //////////////////////////////////////
    // MODIFIERS                        //
    //////////////////////////////////////
    modifier moreThanZero(uint256 _amount) {
        if (_amount == 0) {
            revert DSCEngine__NeedsMoreThanZero();
        }
        _;
    }

    modifier isAllowedToken(address _tokenAddress) {
        if (s_priceFeeds[_tokenAddress] == address(0)) {
            revert DSCEngine__TokenNotAllowed();
        }
        _;
    }

    //////////////////////////////////////
    // FUNCTIONS                        //
    //////////////////////////////////////
    constructor(
        address[] memory tokenAddresses,
        address[] memory priceFeedAddresses,
        address dscAddress
    ) {
        if (tokenAddresses.length != priceFeedAddresses.length) {
            revert DSCEngine__TokenAddressesAndPriceFeedAddressesMustBeTheSameLength();
        }

        // For example ETH/USD, BTC/USD, MKR/USD, etc.
        for (uint256 i = 0; i < tokenAddresses.length; i++) {
            s_priceFeeds[tokenAddresses[i]] = priceFeedAddresses[i];
            s_collateralTokens.push(tokenAddresses[i]);
        }

        i_dsc = DecentralizedStableCoin(dscAddress);
    }

    //////////////////////////////////////
    // EXTERNAL FUNCTIONS               //
    //////////////////////////////////////

    // order of likey actions
    function depositCollateralAndMintDsc() external {}

    /* @notice follows CEI pattern - Checks-Effects-Interactions
     * @param tokenCollateralAddress the address of the token to deposit as collateral
     * @param amountCollateral the amount of collateral to deposit
     *
     */
    function depositCollateral(
        address tokenCollateralAddress,
        uint256 amountCollateral
    )
        external
        moreThanZero(amountCollateral) // check
        isAllowedToken(tokenCollateralAddress) // check
        nonReentrant // good practice on external functions to protect against one of the most common attacks
    {
        // effects
        s_collateralDeposited[msg.sender][
            tokenCollateralAddress
        ] += amountCollateral;
        emit CollateralDeposited(
            msg.sender,
            tokenCollateralAddress,
            amountCollateral
        );
        // interactions
        bool success = IERC20(tokenCollateralAddress).transferFrom(
            msg.sender,
            address(this),
            amountCollateral
        );
        if (!success) {
            revert DSCEngine__TransferFailed();
        }
    }

    function redeemCollateralForDsc() external {}

    /*
     * @dev to redeem collateral
     * 1. health factor must be over 1 after collateral is pulled out
     *
     */
    function redeemCollateral(
        address tokenCollateralAddress,
        uint amountCollateral
    )
        external
        moreThanZero(amountCollateral)
        nonReentrant // review in gas audit if needed.
    {
        s_collateralDeposited[msg.sender][
            tokenCollateralAddress
        ] -= amountCollateral;
        emit CollateralRedeemed(
            msg.sender,
            tokenCollateralAddress,
            amountCollateral
        );
    }

    /* @notice follows CEI pattern - Checks-Effects-Interactions
     * @param amountDscToMint the amount of DecentralizedStableCoin to mint
     * @notice they must have more collateral then the minimum threshold
     */
    function mintDsc(
        uint256 amountDscToMint
    ) external moreThanZero(amountDscToMint) nonReentrant {
        // effects
        s_dscMinted[msg.sender] += amountDscToMint;
        // check - they minted to much then revert.
        _revertIfHealthFactorIsBroken(msg.sender);
        bool minted = i_dsc.mint(msg.sender, amountDscToMint);
        if (!minted) {
            revert DSCEngine__MintFailed();
        }
    }

    // allow owner to burn DSC to balance position quickly
    function burnDsc() external {}

    // allow other users to save the protocol
    function liquidate() external {}

    function getHealthFactor() external {}

    ///////////////////////////////////////
    // PRIVATE & INTERNAL VIEW FUNCTIONS //
    ///////////////////////////////////////

    function _getAccountInformation(
        address user
    )
        private
        view
        returns (uint256 totalDscMinted, uint256 totalCollateralValueInUsd)
    {
        totalDscMinted = s_dscMinted[user];
        totalCollateralValueInUsd = getAccountCollateralValueInUsd(user);
    }

    /*
     * @dev Returns how close to liquidation a user address is.
     * if a user address goes below 1, they can be liquidated.
     */
    function _healthFactor(address user) private view returns (uint256) {
        // need total DSC Minted
        // need total VALUE of deposited collateral
        (
            uint256 totalDscMinted,
            uint256 totalCollateralValueInUsd
        ) = _getAccountInformation(user);

        uint256 collateralAdjustedForThreshold = (totalCollateralValueInUsd *
            LIQUIDATION_THRESHOLD) / LIQUIDATION_DENOMINATOR;
        // TODO: model this in a spreadsheet
        return (collateralAdjustedForThreshold * PRECISION) / totalDscMinted;
    }

    // NOTE: taken from https://docs.aave.com/risk/asset-risk/risk-parameters#health-factor
    // check if they have enough collateral
    // if they do not revert
    function _revertIfHealthFactorIsBroken(address user) internal view {
        uint256 healthFactor = _healthFactor(user);
        if (healthFactor < MIN_HEALTH_FACTOR) {
            revert DSCEngine__HealthFactorIsBelowMinimum(healthFactor);
        }
    }

    ///////////////////////////////////////
    // PUBLIC & EXTERNAL VIEW FUNCTIONS  //
    ///////////////////////////////////////
    function getAccountCollateralValueInUsd(
        address user
    ) public view returns (uint256 totalCollateralValueInUsd) {
        // loope through each collateral token get the amount they deposited and map it to
        // the price, to get the USD value.
        for (uint256 i = 0; i < s_collateralTokens.length; i++) {
            address token = s_collateralTokens[i];
            uint256 amount = s_collateralDeposited[user][token];
            totalCollateralValueInUsd += getUsdValue(token, amount);
        }
        return totalCollateralValueInUsd;
    }

    function getUsdValue(
        address token,
        uint256 amount
    ) public view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            s_priceFeeds[token]
        );
        (, int256 price, , , ) = priceFeed.latestRoundData();
        // NOTE: for the given token check the decimal places in the conversion
        // https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1 check show more details
        // ETH / USD is 8 decimal places
        return
            ((uint256(price) * ADDITIONAL_FEED_PRECISION) * amount) / PRECISION;
    }
}
