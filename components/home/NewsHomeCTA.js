import { Box, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import VCTA from '../VCTA';

const time = '5 min read';
const title = 'Some amazing catchy article title for attention';
const description =
  'It is a long established fact that reader will be distracted by the readable content of a page when looking at something';

const news = [
  {
    time,
    title,
    description,
    imageUrl: '/images/dinox-world.png',
    imageAlt: 'dinox world',
  },
  {
    time,
    title,
    description,
    imageUrl: '/images/splinterlands.png',
    imageAlt: 'splinterlands',
  },
  {
    time,
    title,
    description,
    imageUrl: '/images/axie-infinity-can.png',
    imageAlt: 'axie infinity',
  },
];

export default function NewsHomeCTA() {
  return (
    <VCTA
      background={<Background bgColor="black" />}
      direction="column"
      ctaInfo={
        <CTAInfo
          textAlign="center"
          title="Read the latest and greatest news"
          description="All the tools you need to propel you game from the intial stages of development to a large scale project with immense value and tremendous upside"
        />
      }
      ctaContent={
        <HStack spacing="8">
          {news.map(
            ({ imageUrl, imageAlt, time, title, description }, index) => (
              <Box key={index} maxWidth="22rem">
                <Image src={imageUrl} alt={imageAlt} />
                <Box p="8" bgColor="warmBlack" width="100%">
                  <Text color="white" fontWeight="semibold">
                    <Text as="span" color="customOrange.500">
                      GAMING
                    </Text>{' '}
                    - {time}
                  </Text>
                  <Text color="white" fontWeight="semibold" fontSize="2xl">
                    {title}
                  </Text>
                  <Text color="white" noOfLines="3">
                    {description}
                  </Text>
                </Box>
              </Box>
            ),
          )}
        </HStack>
      }
    />
  );
}
