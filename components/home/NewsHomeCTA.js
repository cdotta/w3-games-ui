import { Flex, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import { ArrowRightIcon } from '../icons';
import NewsCard from '../NewsCard';
import VCTA from '../VCTA';

const imageWidth = '352px';
const imageHeight = '260px';
const time = '5 min read';
const title = 'Some amazing catchy article title for attention';
const description =
  'It is a long established fact that reader will be distracted by the readable content of a page when looking at something';

const news = [
  {
    time,
    title,
    description,
    image: {
      url: '/images/news/dinox-mining.png',
      alt: 'dinox world',
      height: imageHeight,
      width: imageWidth,
    },
  },
  {
    time,
    title,
    description,
    image: {
      url: '/images/news/splinterlands.png',
      alt: 'splinterlands',
      height: imageHeight,
      width: imageWidth,
    },
  },
  {
    time,
    title,
    description,
    image: {
      url: '/images/news/axs.png',
      alt: 'axie infinity',
      height: imageHeight,
      width: imageWidth,
    },
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
        <>
          <Flex gridGap={['2', '8']} wrap="wrap" justifyContent="center">
            {news.map((aNew, index) => (
              <NewsCard key={index} {...aNew} />
            ))}
          </Flex>
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
        </>
      }
    />
  );
}
