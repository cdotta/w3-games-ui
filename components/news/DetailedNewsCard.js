import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { RedArrowRightIcon } from '../icons/index';

export default function DetailedNewsCard({
  image,
  title,
  description,
  readTime,
  // creationTime,
}) {
  return (
    <Flex
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      alignItems="center"
    >
      <Image
        src={image.url}
        alt={image.alt}
        height={image.height}
        width={image.width}
        mr="8"
        fit="cover"
        flexShrink="0"
      />
      <Flex flexDirection="column" paddingY="1">
        <Box>
          <Text fontWeight="bold" as="span" color="black" fontSize="xs">
            Gaming{' '}
          </Text>
          <Text as="span" color="customBlack.200" fontSize="sm">
            · {readTime}
          </Text>
        </Box>
        <Text fontWeight="bold" fontSize="2xl">
          {title}
        </Text>
        <Text flexGrow="1">{description}</Text>
        <Flex justifyContent="space-between">
          <Text as="span" color="customBlack.200" fontSize="sm">
            {readTime}
          </Text>
          <Flex alignItems="center">
            <Text
              fontWeight="bold"
              as="span"
              color="customOrange.500"
              fontSize="sm"
            >
              Read full
            </Text>
            <RedArrowRightIcon fill="customOrange.500" h={6} w={6} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
