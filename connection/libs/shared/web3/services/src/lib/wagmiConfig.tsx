import { createConfig } from 'wagmi';
import { appChains, wagmiConnectors } from './wagmiConnectors';

export const wagmiConfig = createConfig({
  autoConnect: false,
  connectors: wagmiConnectors,
  publicClient: appChains.publicClient,
});
