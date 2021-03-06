import { Box } from '@chakra-ui/react';
import React from 'react';

import Footer from './Footer';
import Header from './header';

export default function Page({ children }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
