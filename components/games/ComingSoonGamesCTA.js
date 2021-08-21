import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Tag,
  TagLabel,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import CTAInfo from '../CTAInfo';

export default function ComingSoonGamesCTA() {
  const comingSoonGames = [
    {
      title: 'Gold Fever',
      description:
        'Face the horrors of the dark and haunting jungle as you engage in fast-paced battles against the opposing faction.',
      src: '/images/games/gold-fever.png',
      alt: 'gold fever',
      tags: [
        {
          name: 'Action',
          size: 'md',
        },
        {
          name: 'Adventure',
          size: 'md',
        },
      ],
    },
    {
      title: 'DeRace',
      description:
        'DeRace is a complete NFT horse racing ecosystem where you can participate in horse races.',

      src: '/images/games/horses.png',
      alt: 'horses',
      tags: [
        {
          name: 'Racing',
          size: 'md',
        },
        {
          name: 'Collectibles',
          size: 'md',
        },
      ],
    },
  ];

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
          Coming Soon
        </Heading>
        <Button borderRadius="30px" colorScheme="warmBlackButton" color="white">
          View More
        </Button>
      </HStack>
      <HStack justify="center" width="100%" spacing="16">
        {comingSoonGames.map(({ title, description, src, tags }, index) => (
          <Flex
            key={index}
            position="relative"
            flexShrink="0"
            w="524px"
            h="300px"
            backgroundImage={`linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0.51) 48.96%, rgba(0, 0, 0, 0) 100%), url('${src}')`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            alignItems="center"
            justifyContent="flex-end"
          >
            <VStack maxW="3xs" alignItems="end">
              <CTAInfo
                title={title}
                description={description}
                fontSizeTitle="md"
                fontSizeDescription="xs"
              />
              <HStack>
                {tags.map(({ name, size }, index) => (
                  <Tag
                    key={index}
                    size={size}
                    borderRadius="full"
                    bgColor="rgba(114, 106, 103,0.5)"
                  >
                    <TagLabel textColor="white">{name}</TagLabel>
                  </Tag>
                ))}
              </HStack>
              <Box>
                <Button size="md" colorScheme="customOrange" mt="5">
                  Add to watchlist
                </Button>
              </Box>
            </VStack>
          </Flex>
        ))}
      </HStack>
    </VStack>
  );
}
