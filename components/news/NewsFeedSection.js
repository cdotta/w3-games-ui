import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';

import { NewsContext } from '../../pages/news';
import NewsCard from '../NewsCard';
import DetailedNewsCard from './DetailedNewsCard';
import NewsSidebar from './NewsSidebar';

const spaceBetween = 'space-between';

export default function NewsFeedSection() {
  const { latestNews, gamesNews } = useContext(NewsContext);
  return (
    <Box as="section" padding="14">
      <Text as="h2" fontSize="2xl" fontWeight="bold" mb="4">
        Latest
      </Text>
      <Flex
        gridGap={['2', '8', '8', '8', '8', '24']}
        wrap="wrap"
        justifyContent={[
          spaceBetween,
          spaceBetween,
          spaceBetween,
          spaceBetween,
          spaceBetween,
          'center',
        ]}
      >
        {latestNews.map((latestNew, index) => (
          <NewsCard
            key={index}
            {...latestNew}
            height="260px"
            width="400px"
            theme="light"
            innerBoxProperties={{ p: '0', pt: '4' }}
          />
        ))}
      </Flex>
      <Flex mt="20" justifyContent="space-between">
        <VStack spacing="14" alignItems="flex-start">
          {gamesNews.map((gamesNews, index) => (
            <DetailedNewsCard key={index} {...gamesNews} />
          ))}
        </VStack>
        <NewsSidebar />
      </Flex>
    </Box>
  );
}
