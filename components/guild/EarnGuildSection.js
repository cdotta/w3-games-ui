import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

import CTAInfo from '../CTAInfo';
import guildData from './guild-data.json';

export default function EarnGuildSection() {
  const { earnSection } = guildData;
  return (
    <Flex
      backgroundColor="black"
      paddingY={['2', '16']}
      flexDirection="column"
      alignItems="center"
    >
      <Flex>
        <CTAInfo
          textAlign="center"
          title={earnSection.title}
          description={earnSection.description}
        />
      </Flex>
      <Box mt="12" maxW="container.lg">
        <Image
          src={earnSection.mainImage.src}
          alt={earnSection.mainImage.alt}
          fit="cover"
        />
        <Flex bgColor="warmBlack" height={['24', '32', '32', '40']}>
          {earnSection.games.map((game, index) => (
            <Flex
              key={index}
              width="20%"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Image src={game.imageSrc} alt={game.imageAlt} fit="cover" />
              {index === 0 && (
                <Box
                  position="absolute"
                  bottom="0"
                  bgColor="customOrange.500"
                  h="1"
                  w={['10', '20', '20', '44']}
                />
              )}
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
