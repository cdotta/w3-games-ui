import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import { ArrowRightIcon } from '../icons';
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
    imageUrl: '/images/dinox.png',
    imageAlt: 'dinox',
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
  const router = useRouter();

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
        <VStack spacing="4">
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
          <HStack
            width="100%"
            justifyContent="flex-end"
            alignItems="center"
            onClick={() => router.push('/news')}
            cursor="pointer"
          >
            <Text color="white">Read more news</Text>
            <ArrowRightIcon />
          </HStack>
        </VStack>
      }
    />
  );
}
