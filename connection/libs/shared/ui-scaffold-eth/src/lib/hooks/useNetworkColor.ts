import { useDarkMode } from 'usehooks-ts';

import { getTargetNetwork } from '@mates/shared-web3-utils';

const DEFAULT_NETWORK_COLOR: [string, string] = ['#666666', '#bbbbbb'];

/**
 * Gets the color of the target network
 */
export const useNetworkColor = () => {
  const { isDarkMode } = useDarkMode();
  const colorConfig = getTargetNetwork().color ?? DEFAULT_NETWORK_COLOR;

  return Array.isArray(colorConfig)
    ? isDarkMode
      ? colorConfig[1]
      : colorConfig[0]
    : colorConfig;
};
