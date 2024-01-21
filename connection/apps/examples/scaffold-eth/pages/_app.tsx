import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
// import Head from 'next/head';
import { useDarkMode } from 'usehooks-ts';
import { WagmiConfig } from 'wagmi';
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';

import { useNativeCurrencyPrice } from '@mates/shared-ui-scaffold-eth';
import { useGlobalState } from '@mates/shared-web3-store';
import { appChains, wagmiConfig } from '@mates/shared-web3-services';

// components
import { BlockieAvatar } from '@mates/shared-ui-scaffold-eth';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import '@rainbow-me/rainbowkit/styles.css';
import './styles.css';

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(
    (state) => state.setNativeCurrencyPrice
  );
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  useEffect(() => {
    setIsDarkTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <WagmiConfig config={wagmiConfig}>
      <NextNProgress />
      <RainbowKitProvider
        chains={appChains.chains}
        avatar={BlockieAvatar}
        theme={isDarkTheme ? darkTheme() : lightTheme()}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="relative flex flex-col flex-1">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <Toaster />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;
