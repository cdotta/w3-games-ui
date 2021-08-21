import { Button, Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

import Paginator from '../Paginator';
import GameCard from './GameCard';

const placeholderGame = {
  imageSrc: '/images/games/placeholder.png',
  score: 4.8,
  genre: 'Action | Battle',
  author: 'CoderDrew Studios',
  year: '2021',
  isAvailable: true,
};

const placeholderGames = [
  'Axie Infinity',
  'Hitman III',
  'It takes two',
  'Resident Evil: Village',
  'Humankind',
  'Axie Infinity',
  'Hitman III',
  'It takes two',
  'Resident Evil: Village',
  'Humankind',
].map((name) => ({
  ...placeholderGame,
  name,
  isAvailable: false,
}));

const trendingGames = [
  {
    ...placeholderGame,
    imageSrc: '/images/games/9-lives.png',
    name: '9 Lives Arena',
  },
  {
    ...placeholderGame,
    imageSrc: '/images/games/gods-unchained.png',
    name: 'God’s Unchained',
  },
  {
    ...placeholderGame,
    imageSrc: '/images/games/war-riders.png',
    name: 'War Riders',
  },
  {
    ...placeholderGame,
    imageSrc: '/images/games/dissolution.png',
    name: 'Dissolution',
  },
  {
    ...placeholderGame,
    imageSrc: '/images/games/war-of-crypta.png',
    name: 'War of Crypta',
  },
  ...placeholderGames,
];

export default function DiscoverGamesSection() {
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
          Discover
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
      <Paginator activePage={1} />
    </VStack>
  );
}
