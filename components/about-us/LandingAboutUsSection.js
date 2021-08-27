import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function LandingAboutUsSection() {
  return (
    <Box
      backgroundColor="black"
      minHeight="calc(100vh - 80px)"
      backgroundImage="/svgs/map-background.svg"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      padding={['2', '20', '20', '36']}
    >
      <Box maxWidth="container.md">
        <Heading size="2xl" color="white">
          A group of multi-talented game lovers on a journey to transform
        </Heading>
        <Heading size="2xl" color="customOrange.500">
          the future of blockchain gaming.
        </Heading>
      </Box>
      <Box
        h={['10', '32']}
        width="1px"
        bgColor="customOrange.500"
        marginY="4"
      />
      <HStack>
        <Image src="/svgs/circle-arrow-down.svg" alt="arrow down icon" />
        <Text color="white">About Us</Text>
      </HStack>
    </Box>
  );
}
