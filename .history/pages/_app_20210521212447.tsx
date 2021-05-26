import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyles';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header>
      <Component {...pageProps} />
    </>
  );
}

// eslint-disable-next-line import/no-default-export
export default MyApp;
