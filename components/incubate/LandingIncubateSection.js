import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../public/incubator.json';

export default function LandingIncubateSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Flex position="relative" flexDirection="column" alignItems="center">
      <Box
        position={['initial', 'initial', 'initial', 'absolute']}
        zIndex="docked"
        top="5"
      >
        <Box maxW="2xl">
          <Heading size="2xl" textAlign="center" mb="4">
            Incubate and grow your web3 games exponentially
          </Heading>
          <Text fontSize="xl" textAlign="center">
            All the tools you need to propel you game from the intial stages of
            development to a large scale project with immense value and
            tremendous upside
          </Text>
        </Box>
      </Box>
      <Box width="100%">
        <Lottie options={defaultOptions} />
      </Box>
    </Flex>
  );
}
