import { Box } from '@chakra-ui/react';
import React from 'react';

import Header from './Header';

export default function Page({ children }) {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
}
