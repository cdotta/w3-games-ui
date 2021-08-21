import {
  Box,
  Button,
  Circle,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { GenreIcon } from '../icons/index';

export default function GameCard({
  imageSrc,
  name,
  score,
  genre,
  author,
  year,
  isAvailable,
}) {
  return (
    <Flex direction="column">
      <Image
        borderTopRadius="14px"
        height="265px"
        width="204px"
        src={imageSrc}
        alt={name}
        fit="cover"
      />
      <HStack justify="space-between" mt="4">
        <Text color="white" fontSize="lg">
          {name}
        </Text>
        <Box>
          <Circle size="24px" border="1px solid" borderColor="customGreen">
            <Text as="span" color="customGreen" fontSize="xs">
              {score}
            </Text>
          </Circle>
        </Box>
      </HStack>
      <Divider mt="8" mb="1" />
      <HStack justify="space-between">
        <Text color="customBlack.100" fontSize="sm">
          {genre}
        </Text>
        <GenreIcon />
      </HStack>
      <HStack justify="space-between" mt="1">
        <Text color="customBlack.100" fontSize="xs">
          {author}
        </Text>
        <Text color="customBlack.100" fontSize="xs">
          {year}
        </Text>
      </HStack>
      <Button
        borderTopRadius="0"
        borderBottomRadius="14px"
        mt="1"
        colorScheme={isAvailable ? 'greenButton' : 'grayButton'}
      >
        {isAvailable ? 'Play now for free' : 'Coming soon'}
      </Button>
    </Flex>
  );
}
