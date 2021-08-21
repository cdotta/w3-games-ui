import { Button, Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

import GameCard from './GameCard';

const placeholderGame = {
  imageSrc: '/images/games/placeholder.png',
  score: 4.8,
  genre: 'Action | Battle',
  author: 'CoderDrew Studios',
  year: '2021',
  isAvailable: true,
};

const trendingGames = [
  {
    ...placeholderGame,
    imageSrc: '/images/games/axie-infinity.png',
    name: 'Axie Infinity',
  },
  {
    ...placeholderGame,
    imageSrc: '/images/games/lost-relics.png',
    name: 'Lost Relics',
  },
  {
    ...placeholderGame,
    imageSrc: '/images/games/splinterlands.png',
    name: 'Splinterlands',
  },
  {
    ...placeholderGame,
    imageSrc: '/images/games/age-of-rust.png',
    name: 'Age of Rust',
  },
  {
    ...placeholderGame,
    imageSrc: '/images/games/skyweaver.png',
    name: 'Skyweaver',
  },
];

export default function TrendingGamesSection() {
  return (
    <VStack
      background="black"
      paddingX={['2', '40']}
      paddingY={['2', '20']}
      spacing="10"
      alignItems="flex-start"
    >
      <HStack justify="space-between" width="100%">
        <Heading size="xl" color="white">
          Trending
        </Heading>
        <Button borderRadius="30px" colorScheme="warmBlackButton" color="white">
          View More
        </Button>
      </HStack>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        wrap="wrap"
        gridGap="4"
      >
        {trendingGames.map((trendingGame, index) => (
          <GameCard key={index} {...trendingGame} />
        ))}
      </Flex>
    </VStack>
  );
}
