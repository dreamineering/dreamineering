# Cyfrin Updraft

```bash
forge init --no-commit
```

[Tutorial Source](https://github.com/Cyfrin/foundry-simple-storage-f23/blob/main/src/SimpleStorage.sol)

config user settings for formating

```json
    "[solidity]": {
        "editor.defaultFormatter": "NomicFoundation.hardhat-solidity"
    },
```

## Ethereum

JSON-RPC Specification of the standard interface for Ethereum clients.

https://ethereum.github.io/execution-apis/api-documentation/

## Anvil

```bash
forge create SimpleStorage --interactive
```

See broadcast folder to track last deploy config

```bash
forge script script/DeploySimpleStorage.s.sol --rpc-url http://127.0.0.1:8545
```

```bash
forge script script/DeploySimpleStorage.s.sol --rpc-url http://127.0.0.1:8545 --broadcast --private-key
```

```bash
cast --to-base 0x714e1 dec
```

## Deploy

```bash
forge script script/DeploySimpleStorage.s.sol --rpc-url $RPC_URL --broadcast --private-key $PRIVATE_KEY
```

[ThirdWeb Deploy](https://portal.thirdweb.com/deploy)

```bash
npx thirdweb deploy
```

## Cast

https://updraft.cyfrin.io/courses/foundry/foundry-simple-storage/interact-with-smart-contract-cli?lesson_format=transcript

Interact with a contract

```bash
cast send <address> store(uint256) <values>
```

```bash
cast call <address> retrieve()
```

```bash
cast --to-base <hex value copied> decimal
```

## Test Net

1. Get Test ETH
2. Signup for Node Provider
3. Setup test net URL
4. Metamask Private Key

```bash
source .env
```

```bash
forge script script/DeploySimpleStorage.s.sol --rpc-url $SEPOLIA_RPC_URL --private-key $PRIVATE_KEY --broadcast
```

## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
