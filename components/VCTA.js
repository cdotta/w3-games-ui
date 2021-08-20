import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

export default function HCTA({
  background,
  ctaInfo,
  ctaContent,
  additionalContentHeight = '0px',
}) {
  return (
    <VStack
      height={`calc(100vh - ${additionalContentHeight})`}
      position="relative"
      align="center"
      justifyContent="center"
    >
      {background}
      <Box>{ctaInfo}</Box>
      <Box>{ctaContent}</Box>
    </VStack>
  );
}
