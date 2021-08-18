import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Background({ bgImageUrl, secondaryImage }) {
  return (
    <>
      <Box
        bgImage={`url('${bgImageUrl}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        position="absolute"
        width="100%"
        height="100%"
        zIndex="hide"
        pointerEvents="none"
      >
        {secondaryImage}
      </Box>
    </>
  );
}
