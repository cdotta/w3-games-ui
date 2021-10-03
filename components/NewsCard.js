import { Box, Image, Link, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import { getSafeImageUrl } from '../lib/imageSourceHelper';

export default function NewsCard({
  title,
  category,
  reading_time,
  image,
  description,
  href,
  height,
  width,
  innerBoxProperties = {},
  theme = 'dark',
}) {
  const isDarkTheme = useMemo(() => theme === 'dark', [theme]);

  const finalInnerBoxProperties = useMemo(
    () => ({
      p: '8',
      bgColor: isDarkTheme ? 'warmBlack' : 'white',
      width: '100%',
      ...innerBoxProperties,
    }),
    [innerBoxProperties, isDarkTheme],
  );

  return (
    <Link href={href} isExternal maxWidth={width}>
      <Image
        src={getSafeImageUrl(image, 'small')}
        height={height}
        width={width}
        alt="latest-image"
        objectFit="cover"
      />
      <Box {...finalInnerBoxProperties}>
        <Text color="white" fontWeight="semibold">
          <Text as="span" color="customOrange.500" textTransform="uppercase">
            {category}
          </Text>{' '}
          <Text
            as="span"
            color={isDarkTheme ? 'customOrange.500' : 'warmBlack'}
            opacity={isDarkTheme ? 1 : 0.3}
          >
            - {reading_time}
          </Text>
        </Text>
        <Text
          color={isDarkTheme ? 'white' : 'warmBlack'}
          fontWeight="semibold"
          fontSize="2xl"
        >
          {title}
        </Text>
        <Text color={isDarkTheme ? 'white' : 'warmBlack'} noOfLines="3">
          {description}
        </Text>
      </Box>
    </Link>
  );
}
