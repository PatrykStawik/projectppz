import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyles';
import {} from '../components/'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

// eslint-disable-next-line import/no-default-export
export default MyApp;
