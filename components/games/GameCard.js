import {
  Box,
  Button,
  Circle,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { getSafeImageUrl } from '../../lib/imageSourceHelper';
import { GenreIcon } from '../icons/index';

export default function GameCard({
  image,
  title,
  rating,
  category,
  author,
  creationYear,
  href,
}) {
  return (
    <Flex direction="column">
      <Image
        borderTopRadius="14px"
        height="265px"
        width="204px"
        src={
          image
            ? getSafeImageUrl(image, 'small')
            : '/images/games/placeholder.png'
        }
        alt="game-card"
        fit="cover"
      />
      <HStack justify="space-between" mt="4">
        <Text color="white" fontSize="lg">
          {title}
        </Text>
        <Box>
          <Circle size="24px" border="1px solid" borderColor="customGreen">
            <Text as="span" color="customGreen" fontSize="xs">
              {rating.toFixed(1)}
            </Text>
          </Circle>
        </Box>
      </HStack>
      <Divider mt="8" mb="1" />
      <HStack justify="space-between">
        <Text color="customBlack.100" fontSize="sm">
          {category}
        </Text>
        <GenreIcon />
      </HStack>
      <HStack justify="space-between" mt="1">
        <Text color="customBlack.100" fontSize="xs">
          {author}
        </Text>
        <Text color="customBlack.100" fontSize="xs">
          {creationYear}
        </Text>
      </HStack>
      <Link href={href} _hover={{ textDecoration: 'none' }} isExternal>
        <Button
          isFullWidth
          borderTopRadius="0"
          borderBottomRadius="14px"
          mt="1"
          colorScheme={href ? 'greenButton' : 'grayButton'}
        >
          {href ? 'Play now for free' : 'Coming soon'}
        </Button>
      </Link>
    </Flex>
  );
}
