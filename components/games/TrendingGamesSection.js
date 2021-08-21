import {
  Box,
  Button,
  Circle,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const score = 4.8;
const genre = 'Action | Battle';
const author = 'CoderDrew Studios';
const year = '2021';

const trendingGames = [
  {
    src: '/images/games/axie-infinity.png',
    name: 'Axie Infinity',
    price: undefined,
    score,
    genre,
    author,
    year,
  },
  {
    src: '/images/games/lost-relics.png',
    name: 'Lost Relics',
    price: undefined,
    score,
    genre,
    author,
    year,
  },
  {
    src: '/images/games/splinterlands.png',
    name: 'Splinterlands',
    price: undefined,
    score,
    genre,
    author,
    year,
  },
  {
    src: '/images/games/age-of-rust.png',
    name: 'Age of Rust',
    price: undefined,
    score,
    genre,
    author,
    year,
  },
  {
    src: '/images/games/skyweaver.png',
    name: 'Skyweaver',
    price: undefined,
    score,
    genre: '',
    author: '',
    year: '',
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
        {trendingGames.map(({ src, name, score }, index) => (
          <Box key={index}>
            <Image
              borderTopRadius="14px"
              height="265px"
              width="204px"
              src={src}
              alt="asdf"
              fit="cover"
            />
            <HStack justify="space-between" mt="4">
              <Text color="white" fontSize="lg">
                {name}
              </Text>
              <Box>
                <Circle
                  size="24px"
                  border="1px solid"
                  borderColor="customGreen"
                >
                  <Text as="span" color="customGreen" fontSize="xs">
                    {score}
                  </Text>
                </Circle>
              </Box>
            </HStack>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
}
