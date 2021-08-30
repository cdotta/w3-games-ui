import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function LandingGuildSection() {
  return (
    <Flex
      backgroundColor="black"
      paddingY={['2', '16']}
      flexDirection="column"
      alignItems="center"
    >
      <Box maxWidth="container.md">
        <Heading size="2xl" color="white" textAlign="center" mb="2">
          Join{' '}
          <Heading as="span" size="2xl" color="customOrange.500">
            |
          </Heading>{' '}
          Play{' '}
          <Heading as="span" size="2xl" color="customOrange.500">
            |
          </Heading>{' '}
          Earn
        </Heading>
        <Text fontSize="xl" color="white" textAlign="center">
          W3 Guild provides gamers with the assets, support, and camaraderie
          they need to earn from blockchain-based gaming economies
        </Text>
      </Box>
      <Box mt="10">
        <Image
          src="/images/guild/gamer-wallpaper.png"
          alt="gamer wallpaper"
          width={2880}
          height={872}
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
}
