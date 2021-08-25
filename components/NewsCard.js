import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useMemo } from 'react';

export default function NewsCard({
  image,
  time,
  title,
  description,
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
    <Box maxWidth={image.width}>
      <Image
        src={image.url}
        alt={image.alt}
        height={image.height}
        width={image.width}
        layout="responsive"
        objectFit="cover"
        quality="100"
      />
      <Box {...finalInnerBoxProperties}>
        <Text color="white" fontWeight="semibold">
          <Text as="span" color="customOrange.500">
            GAMING
          </Text>{' '}
          <Text
            as="span"
            color={isDarkTheme ? 'customOrange.500' : 'warmBlack'}
            opacity={isDarkTheme ? 1 : 0.3}
          >
            - {time}
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
    </Box>
  );
}
