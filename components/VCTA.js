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
      minHeight={`calc(100vh - ${additionalContentHeight})`}
      position="relative"
      align="center"
      justifyContent="center"
    >
      {background}
      <Box maxW="xl">{ctaInfo}</Box>
      <Box>{ctaContent}</Box>
    </VStack>
  );
}
