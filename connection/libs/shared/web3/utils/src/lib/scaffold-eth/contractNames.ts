import { ContractName, contracts } from './contract';

import { scaffoldConfig } from '@mates/shared-web3-config';

export function getContractNames() {
  const contractsData = contracts?.[scaffoldConfig.targetNetwork.id];
  return contractsData ? (Object.keys(contractsData) as ContractName[]) : [];
}
