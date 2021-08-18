import { Box } from '@chakra-ui/react';
import React from 'react';

import CTAInfo from './CTAInfo';

export default function CTA({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  background,
}) {
  return (
    <Box display="flex" height="100vh" position="relative">
      {background}
      <Box
        width={['100%', '100%', '50%']}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box maxW="md">
          <CTAInfo
            title={title}
            description={description}
            primaryButtonText={primaryButtonText}
            secondaryButtonText={secondaryButtonText}
          />
        </Box>
      </Box>
    </Box>
  );
}
