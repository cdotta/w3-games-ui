import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Background({ bgImageUrl, bgColor, secondaryImage }) {
  return (
    <>
      <Box
        bgImage={`url('${bgImageUrl}')`}
        bgColor={bgColor}
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
