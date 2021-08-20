import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Background({ bgImageUrl, bgColor, secondaryImage }) {
  return (
    <Box
      background={`url('${bgImageUrl}') no-repeat center center fixed`}
      bgColor={bgColor}
      bgSize="cover"
      position="absolute"
      width="100%"
      height="100%"
      zIndex="hide"
      pointerEvents="none"
    >
      {secondaryImage}
    </Box>
  );
}
