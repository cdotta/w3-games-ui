import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import CTAInfo from './CTAInfo';

export default function CTA({
  title,
  description,
  primaryButtonText,
  primaryButtonIcon,
  secondaryButtonText,
  secondaryButtonIcon,
  background,
  additionalContentHeight = '0px',
}) {
  return (
    <Flex
      height={`calc(100vh - ${additionalContentHeight})`}
      position="relative"
    >
      {background}
      <Flex
        width={['100%', '100%', '50%']}
        alignItems="center"
        justifyContent={['center', 'center', 'flex-end']}
      >
        <Box maxW="md">
          <CTAInfo
            title={title}
            description={description}
            primaryButtonText={primaryButtonText}
            primaryButtonIcon={primaryButtonIcon}
            secondaryButtonText={secondaryButtonText}
            secondaryButtonIcon={secondaryButtonIcon}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
