import { Button, Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';

import { GamesContext } from '../../pages/games';
import GameCard from './GameCard';

export default function DiscoverGamesSection() {
  const { discoverGames } = useContext(GamesContext);
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
        {discoverGames.map((discoverGame, index) => (
          <GameCard key={index} {...discoverGame.game} />
        ))}
      </Flex>
    </VStack>
  );
}
