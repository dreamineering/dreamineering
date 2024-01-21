# Random Raffle

Proveably Random Raffle Contracts.

## About

This code is to create proveable random smart contract lottery.

## Flow

1. Users can enter by paying for a ticket.
2. Ticket fees go to the winner of the draw
3. After X period of time the lottery will automatically draw a winner

## Services

- [Chainlink VRF -> Randomness](https://updraft.cyfrin.io/courses/foundry/smart-contract-lottery/implementing-chainlink-vrf)
- Chainlink Automation -> Time Based Trigger

Example Code

- [VRFv2Consumer](https://remix.ethereum.org/#url=https://docs.chain.link/samples/VRF/VRFv2Consumer.sol)

## Styleguide

https://docs.soliditylang.org/en/latest/style-guide.html

// Layout of Contract:
// version
// imports
// errors
// interfaces, libraries, contracts
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
// internal & private view & pure functions
// external & public view & pure functions

## Testing

1. Write some deploy scripts
2. write tests
   - Work on a local chain
   - Forked Testnet
   - Forked Mainnet
