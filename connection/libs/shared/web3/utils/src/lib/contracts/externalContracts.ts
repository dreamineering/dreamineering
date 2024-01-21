import { GenericContractsDeclaration } from '../scaffold-eth/contract';

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *      address: "0x...",
 *      abi: [...],
 *    }
 * } as const;
 */
export const externalContracts =
  {} as const satisfies GenericContractsDeclaration;

export default externalContracts satisfies GenericContractsDeclaration;
