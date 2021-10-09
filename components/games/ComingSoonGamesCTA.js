import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Tag,
  TagLabel,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';

import { GamesContext } from '../../pages/games';
import CTAInfo from '../CTAInfo';

export default function ComingSoonGamesCTA() {
  const { comingSoonGames } = useContext(GamesContext);
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
          Coming Soon
        </Heading>
        <Button borderRadius="30px" colorScheme="warmBlackButton" color="white">
          View More
        </Button>
      </HStack>
      <Flex justify="center" width="100%" gridGap={['2', '16']} wrap="wrap">
        {comingSoonGames.map(
          ({ title, description, tags, background, href }, index) => (
            <Link
              href={href}
              isExternal
              _hover={{ textDecoration: 'none' }}
              display="flex"
              key={index}
              position="relative"
              w="524px"
              h="300px"
              backgroundImage={`linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0.51) 48.96%, rgba(0, 0, 0, 0) 100%), url('${background.url}')`}
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
                  {tags &&
                    tags.split(',').map((name, index) => (
                      <Tag
                        key={index}
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
            </Link>
          ),
        )}
      </Flex>
    </VStack>
  );
}
