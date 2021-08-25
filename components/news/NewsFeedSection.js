import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import NewsCard from '../NewsCard';
import DetailedNewsCard from './DetailedNewsCard';
import { detailedNews, latestNews } from './newsData';
import NewsSidebar from './NewsSidebar';

export default function NewsFeedSection() {
  return (
    <Box as="section" padding="14">
      <Text as="h2" fontSize="2xl" fontWeight="bold" mb="4">
        Latest
      </Text>
      <Flex gridGap={['2', '8']} wrap="wrap" justifyContent="space-between">
        {latestNews.map((latestNew, index) => (
          <NewsCard
            key={index}
            {...latestNew}
            theme="light"
            innerBoxProperties={{ p: '0', pt: '4' }}
          />
        ))}
      </Flex>
      <Flex mt="20" justifyContent="space-between">
        <VStack spacing="14" alignItems="flex-start">
          {detailedNews.map((detailedNew, index) => (
            <DetailedNewsCard key={index} {...detailedNew} />
          ))}
        </VStack>
        <NewsSidebar />
      </Flex>
    </Box>
  );
}
