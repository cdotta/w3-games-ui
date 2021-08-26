import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import CTAInfo from '../CTAInfo';
import { AddSquareIcon } from '../icons';

const description = 'Access early stage funding to bring your plans to life';

const levelUpSquares = [
  {
    name: 'Funding',
    description,
    image: {
      url: '/svgs/coin.svg',
      alt: 'Funding',
    },
  },
  {
    name: 'Marketing',
    description,
    image: {
      url: '/svgs/trend-up.svg',
      alt: 'Marketing',
    },
  },
  {
    name: 'Consultation',
    description,
    image: {
      url: '/svgs/message-time.svg',
      alt: 'Consultation',
    },
  },
  {
    name: 'Strategy',
    description,
    image: {
      url: '/svgs/arrow-square.svg',
      alt: 'Strategy',
    },
  },
  {
    name: 'Legal Advice',
    description,
    image: {
      url: '/svgs/scale.svg',
      alt: 'Legal Advice',
    },
  },
  {
    name: 'Community',
    description,
    image: {
      url: '/svgs/people.svg',
      alt: 'Community',
    },
  },
  {
    name: 'Partnerships',
    description,
    image: {
      url: '/svgs/command.svg',
      alt: 'Partnerships',
    },
  },
  {
    name: 'Game Listing',
    description,
    image: {
      url: '/svgs/data-tree.svg',
      alt: 'Game Listing',
    },
  },
];

export default function LevelUpSection() {
  return (
    <>
      <Flex
        backgroundColor="customBlack.300"
        alignItems="center"
        flexDirection="column"
        width="100%"
        paddingY="28"
        paddingX={['2', '32']}
      >
        <Box maxW="2xl">
          <CTAInfo
            title="Everything we do to take your project to the next level"
            description="We provide your project with top notch support in various key areas essential to nurturing a web 3 game from early stage to substantial ATHs"
            textAlign="center"
          />
        </Box>
        <SimpleGrid columns={['1', '2', '2', '3', '4']} spacing="10" mt="24">
          {levelUpSquares.map(({ image, name, description }, index) => (
            <VStack
              key={index}
              height="2xs"
              width="2xs"
              backgroundColor="customBlack.100"
            >
              <Flex px="6" pt="12" flexDirection="column" alignItems="center">
                <Image src={image.url} alt={image.alt} />
                <Text
                  fontSize="2xl"
                  fontWeight="semibold"
                  color="white"
                  textAlign="center"
                  marginY="2"
                >
                  {name}
                </Text>
                <Text fontWeight="semibold" color="white" textAlign="center">
                  {description}
                </Text>
              </Flex>
            </VStack>
          ))}
        </SimpleGrid>
      </Flex>
      <Box
        padding="8"
        background="linear-gradient(-135deg, #5b5350 30px, transparent 0) 0 30px,
    linear-gradient(135deg, #5b5350 30px, black 0) 0 30px"
        backgroundColor="customBlack.300"
        backgroundPosition="left bottom"
        backgroundRepeat="repeat-x"
        backgroundSize="60px 60px"
      />
      <Flex
        backgroundColor="black"
        alignItems="center"
        flexDirection="column"
        paddingTop="8"
        paddingBottom="24"
        paddingX={['2', '32']}
      >
        <Box maxW="2xl">
          <CTAInfo
            title="Everything we do to take your project to the next level"
            description="We provide your project with top notch support in various key areas essential to nurturing a web 3 game from early stage to substantial ATHs"
            textAlign="center"
          />
        </Box>
        <Button
          mt="8"
          size="lg"
          colorScheme="customOrange"
          rightIcon={<AddSquareIcon w="6" h="6" />}
        >
          Get started for free
        </Button>
      </Flex>
    </>
  );
}
