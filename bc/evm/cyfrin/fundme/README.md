https://github.com/matiassingers/awesome-readme

[Pitch Template](https://www.figma.com/file/ulXBuW5LCTTWErgUF3j1PQ/pitch-deck---TEMPLATE?type=whiteboard&node-id=319-20&t=fWyW4lMrhklkkZAh-4)

## Tutorial

[Foundry Fund Me](https://github.com/Cyfrin/foundry-full-course-f23?tab=readme-ov-file#lesson-7-foundry-fund-me)

[Source Code](https://github.com/Cyfrin/foundry-fund-me-f23)

## Dependencies

```bash
forge install smartcontractkit/chainlink-brownie-contracts@0.6.1 --no-commit
```

```bash
forge build
```

## Testing

Blockchain Fork

```bash
source .env
```

```bash
echo $SEPOLIA_RPC_URL
```

```bash
forge test -vv
```

```bash
forge test --mt testPriceFeedVersionIsAccurate -vvv --fork-url $SEPOLIA_RPC_URL
```

[Foundry Cheatcodes](https://book.getfoundry.sh/forge/cheatcodes)

## Auditing

[X List](https://twitter.com/i/lists/1634906258108039171)

## Chisel

Useful instead of remix to run solidity in the terminal.

## Interactions

```bash
forge script script/Interactions.s.sol:FundFundMe --rpc-url $SEP --private-key $KEY
```

## Makefile

[Tutorial](https://www.youtube.com/watch?v=Q3tvdSrm2vI)

- [Original Source](https://github.com/Cyfrin/foundry-fund-me-f23/blob/main/Makefile)

## Protocols

Source code to learn from.

- [AAVE](https://github.com/aave)
- [Uniswap](https://github.com/Uniswap)

## Client

Docs for how apps connect with wallets.

[metamask wallet](https://docs.metamask.io/wallet/)
