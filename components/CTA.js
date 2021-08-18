import { Box, Image } from '@chakra-ui/react';
import React from 'react';

import CTAInfo from './CTAInfo';

export default function CTA({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}) {
  return (
    <Box
      display="flex"
      bgImage="url('/images/desert-background.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      height="100vh"
      position="relative"
    >
      <Box h="90%" position="absolute" bottom="0" right="50">
        <Image src="/images/pirate.png" alt="pirate" />
      </Box>
      <Box maxW={['md', 'lg']}>
        <CTAInfo
          title={title}
          description={description}
          primaryButtonText={primaryButtonText}
          secondaryButtonText={secondaryButtonText}
        />
      </Box>
    </Box>
  );
}
