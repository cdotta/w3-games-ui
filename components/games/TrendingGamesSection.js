import { Button, Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

import GameCard from './GameCard';

const score = 4.8;
const genre = 'Action | Battle';
const author = 'CoderDrew Studios';
const year = '2021';

const trendingGames = [
  {
    imageSrc: '/images/games/axie-infinity.png',
    name: 'Axie Infinity',
    price: undefined,
    score,
    genre,
    author,
    year,
  },
  {
    imageSrc: '/images/games/lost-relics.png',
    name: 'Lost Relics',
    price: undefined,
    score,
    genre,
    author,
    year,
  },
  {
    imageSrc: '/images/games/splinterlands.png',
    name: 'Splinterlands',
    price: undefined,
    score,
    genre,
    author,
    year,
  },
  {
    imageSrc: '/images/games/age-of-rust.png',
    name: 'Age of Rust',
    price: undefined,
    score,
    genre,
    author,
    year,
  },
  {
    imageSrc: '/images/games/skyweaver.png',
    name: 'Skyweaver',
    price: undefined,
    score,
    genre,
    author,
    year,
  },
];

export default function TrendingGamesSection() {
  return (
    <VStack
      background="black"
      paddingX="40"
      paddingY="20"
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
      <HStack justify="center" width="100%" spacing="6">
        {trendingGames.map((trendingGame) => (
          <GameCard key={trendingGames.name} {...trendingGame} />
        ))}
      </HStack>
    </VStack>
  );
}
