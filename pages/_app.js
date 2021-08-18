/* eslint-disable react/jsx-props-no-spreading */

import '../styles/globals.css';
import '@fontsource/nunito';
import '@fontsource/exo';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../lib/theme';

function MyApp({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
