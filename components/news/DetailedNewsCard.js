import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

import { getSafeImageUrl } from '../../lib/imageSourceHelper';
import { RedArrowRightIcon } from '../icons/index';

export default function DetailedNewsCard({
  title,
  description,
  category,
  reading_time,
  uploaded_time,
  image,
  href,
}) {
  return (
    <Flex
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      alignItems="center"
    >
      <Image
        src={getSafeImageUrl(image, 'small')}
        alt="game"
        height="216px"
        width="360px"
        mr="8"
        fit="cover"
        flexShrink="0"
      />
      <Flex flexDirection="column" paddingY="1">
        <Box>
          <Text fontWeight="bold" as="span" color="black" fontSize="xs">
            {category}{' '}
          </Text>
          <Text as="span" color="customBlack.200" fontSize="sm">
            · {reading_time}
          </Text>
        </Box>
        <Text fontWeight="bold" fontSize="2xl">
          {title}
        </Text>
        <Text flexGrow="1">{description}</Text>
        <Flex justifyContent="space-between">
          <Text as="span" color="customBlack.200" fontSize="sm">
            {uploaded_time}
          </Text>
          <Link display="flex" alignItems="center" href={href} isExternal>
            <Text
              fontWeight="bold"
              as="span"
              color="customOrange.500"
              fontSize="sm"
            >
              Read full
            </Text>
            <RedArrowRightIcon fill="customOrange.500" h={6} w={6} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
