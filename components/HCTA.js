import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';

export default function HCTA({
  background,
  ctaInfo,
  ctaContent,
  isReverse = false,
  additionalContentHeight = '0px',
}) {
  return (
    <HStack
      height={`calc(100vh - ${additionalContentHeight})`}
      position="relative"
      align="center"
    >
      {background}
      <Flex
        flex={['auto', 'auto', 'auto', '1']}
        justifyContent="center"
        order={isReverse ? '2' : '1'}
      >
        <Box maxW="md">{ctaInfo}</Box>
      </Flex>
      <Flex
        flex={['auto', 'auto', 'auto', '1']}
        justifyContent="center"
        order={isReverse ? '1' : '2'}
      >
        {ctaContent}
      </Flex>
    </HStack>
  );
}
