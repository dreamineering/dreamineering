# Stablecoin

## Design Spec

1. (Relative Stability) Anchored or Pegged => $1.00
   1. Chainlink Price Feed
   2. Set a function to exchange ETH & BTC - $$$
2. Stability Mechanism (Minting): Algorithmic (Decentralized)
   1. People can only mint the stablecoin with enough collateral (coded logic)
3. Collateral: Exogenous (Crypto)
   1. wETC
   2. wBTC

## Packages

forge install openzeppelin/openzeppelin-contracts@v4.0.0 --no-commit
forge install smartcontractkit/chainlink-brownie-contracts@0.8.0 --no-commit

## Scenarios

If under a threshold, 150% for example

Then someone pays back your minted DSC, they can have all your collateral for a discount as reward for safe-guarding the protocol.

This incentivizes people not to over leverage position on stablecoin, because the lose more than they borrow.

| $DSC     | Crypto | Amount |
| -------- | ------ | ------ |
| $100 DSC | ETH    |        |

Need data feed from .
https://data.chain.link/

## Tests

forge test --fork-url $SEPOLIA_RPC_URL

## Courses

- [Full course](https://github.com/Cyfrin/foundry-full-course-f23)
- [Forta Bot](https://www.youtube.com/watch?v=42RcaQ8YTzQ)
