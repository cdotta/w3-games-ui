import { Flex, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import { ArrowRightIcon } from '../icons';
import NewsCard from '../NewsCard';
import VCTA from '../VCTA';

const time = '5 min read';
const title = 'Some amazing catchy article title for attention';
const description =
  'It is a long established fact that reader will be distracted by the readable content of a page when looking at something';
const category = 'Gaming';
const news = [
  {
    title,
    description,
    reading_time: time,
    category,
    image: { formats: { small: { url: '/images/news/dinox-mining.png' } } },
  },
  {
    title,
    description,
    reading_time: time,
    category,
    image: { formats: { small: { url: '/images/news/splinterlands.png' } } },
  },
  {
    title,
    description,
    reading_time: time,
    category,
    image: { formats: { small: { url: '/images/news/axs.png' } } },
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
              <NewsCard key={index} {...aNew} width="352px" height="260" />
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
