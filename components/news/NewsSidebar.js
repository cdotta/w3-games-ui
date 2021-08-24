import { Box, Button, Divider, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

import MediaButtonsGroup from '../MediaButtonsGroup';

const gamming = 'Gaming';
const collectibles = 'Collectibles';

const archives = [gamming, collectibles, gamming, collectibles, gamming];

const categories = [...archives, collectibles, gamming];

export default function NewsSidebar() {
  return (
    <Box
      flexShrink="0"
      width="403px"
      bgColor="warmBlack"
      ml={['20', '20', '20', '20', '28']}
      display={['none', 'none', 'none', 'flex']}
      flexDirection="column"
      alignItems="center"
      padding="16"
    >
      <Input
        background="white"
        height="14"
        placeholder="Search our news"
        _placeholder={{ color: 'black' }}
        color="black"
        borderRadius="0"
        type="text"
        fontSize="lg"
      />
      <Divider width="50%" mt="12" mb="8" />
      <Text
        color="white"
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        letterSpacing="wide"
      >
        Subscribe for the latest news & updates
      </Text>
      <Text color="white" fontSize="sm" textAlign="center" mt="1">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Text>
      <Input
        background="white"
        height="14"
        marginY="6"
        placeholder="Enter your email"
        _placeholder={{ color: 'black' }}
        color="black"
        borderRadius="0"
        type="email"
        fontSize="lg"
      />
      <Button size="lg" isFullWidth colorScheme="customOrange" borderRadius="0">
        Subscribe
      </Button>
      <Divider width="50%" mt="12" mb="8" />
      <Text
        mb="6"
        color="white"
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        letterSpacing="wide"
      >
        Categories
      </Text>
      {categories.map((category, index) => (
        <Flex key={index} alignItems="center" mb="4" alignSelf="flex-start">
          <Box w="2" border="1px solid #FFFFFF" mr="2" />
          <Text color="white">{category}</Text>
        </Flex>
      ))}
      <Divider width="50%" mt="12" mb="8" />
      <Text
        mb="6"
        color="white"
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        letterSpacing="wide"
      >
        Archives
      </Text>
      {archives.map((archive, index) => (
        <Flex key={index} alignItems="center" mb="4" alignSelf="flex-start">
          <Box w="2" border="1px solid #FFFFFF" mr="2" />
          <Text color="white">{archive}</Text>
        </Flex>
      ))}
      <Divider width="50%" mt="12" mb="8" />
      <Text
        color="white"
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        letterSpacing="wide"
      >
        Connect with us
      </Text>
      <MediaButtonsGroup />
    </Box>
  );
}
