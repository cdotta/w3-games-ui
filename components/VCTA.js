import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

export default function HCTA({
  background,
  ctaInfo,
  ctaContent,
  isFullHeight = true,
  additionalContentHeight = '0px',
}) {
  return (
    <VStack
      minHeight={isFullHeight ? `calc(100vh - ${additionalContentHeight})` : ''}
      position="relative"
      align="center"
      justifyContent="center"
      paddingY={['5', '20']}
    >
      {background}
      <Box maxW="xl">{ctaInfo}</Box>
      <Box>{ctaContent}</Box>
    </VStack>
  );
}
