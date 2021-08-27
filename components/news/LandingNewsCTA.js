import {
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import { BlackArrowRightIcon } from '../icons/index';

const title = 'Amazing catchy title for the article';
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

export const topStories = [
  {
    text: 'Coder Drew Studios secures massive funding for their new blockbuster',
  },
  {
    text: 'Dinox partners with W3 games to revolutionize the blockchain gaming space',
  },
  {
    text: 'Will web 3 games overthrow regular online games anytime soon?',
  },
];

export const trendingInfo = [
  {
    title,
    description,
    src: '/images/news/argos.png',
    alt: 'argos',
  },
  {
    title,
    description,
    src: '/images/news/trending.png',
    alt: 'trending',
  },
  {
    title,
    description,
    src: '/images/news/trending-consoles.png',
    alt: 'trending consoles',
  },
];

export default function LandingNewsCTA() {
  return (
    <VStack
      background="black"
      paddingX="10"
      paddingY="20"
      spacing="10"
      alignItems="flex-start"
    >
      <Flex
        justify="center"
        width="100%"
        justifyContent="flex-start"
        alignItems="stretch"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Flex
          flexGrow="1"
          mr={['0', '0', '0', '10']}
          minH={['lg', 'lg', 'lg', 'lg', 'lg', '4xl']}
          backgroundImage={`linear-gradient(119.17deg, #F5F6F8 13.96%, rgba(245, 246, 248, 0) 67.05%), url('/images/news/game-of-the-season.png')`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <VStack maxW="sm" pt="10" pl="10" alignItems="flex-start" spacing={4}>
            <Heading>Most hype games of the season</Heading>
            <HStack>
              <Image
                src="/images/news/coder-drew.png"
                alt="coder drew"
                fit="cover"
                borderRadius="full"
                boxSize="30px"
              />
              <Text>Coder Drew</Text>
            </HStack>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </Text>
          </VStack>
        </Flex>
        <Flex maxW="md" bgColor="white" mt={['10', '10', '10', '0']}>
          <Flex flexDirection="column" p="9">
            <Heading as="h1" fontSize="xl" fontWeight="extrabold">
              Top Stories
            </Heading>
            <Flex flexDirection="column" alignItems="center">
              {topStories.map(({ text }, index) => (
                <div key={index}>
                  <HStack spacing="4" py="7">
                    <Text fontSize="lg">{text}</Text>
                    <BlackArrowRightIcon />
                  </HStack>
                  <Divider orientation="horizontal" />
                </div>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" bgColor="white" flexDirection="column" p="10">
        <Heading as="h1" fontSize="xl" fontWeight="extrabold">
          Trending
        </Heading>
        <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent="center"
        >
          {trendingInfo.map(({ src, alt, title, description }, index) => {
            return (
              <Flex
                key={index}
                py="12"
                pr="4"
                flexDirection={['column', 'row']}
              >
                <Image
                  src={src}
                  alt={alt}
                  width="36"
                  height="24"
                  marginX={['0', '2']}
                  marginY={['2', '0']}
                />
                <Flex
                  flexDirection="column"
                  height="24"
                  justifyContent="space-around"
                >
                  <Text fontWeight="bold">{title}</Text>
                  <Text fontSize="sm">{description}</Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </VStack>
  );
}
