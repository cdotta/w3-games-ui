import { Circle, HStack, Text } from '@chakra-ui/react';
import React from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from './icons/index';

export default function Paginator({ activePage }) {
  const pages = Array.from({ length: 10 });
  return (
    <HStack
      bgColor="warmBlack"
      height="12"
      width="100%"
      justifyContent="space-between"
      paddingX="4"
    >
      <HStack justifyContent="flex-end" alignItems="center" cursor="pointer">
        <ArrowLeftIcon />
        <Text color="white">Prev</Text>
      </HStack>
      {pages.map((_, index) => {
        const pageNumber = index + 1;
        return (
          <Circle
            bgColor={activePage === pageNumber ? 'red' : 'warmBlack'}
            width="28px"
            height="28px"
            key={pageNumber}
          >
            <Text color="white" size="sm">
              {pageNumber}
            </Text>
          </Circle>
        );
      })}
      <Circle bgColor="warmBlack" width="28px" height="28px">
        <Text color="white" size="sm">
          ...
        </Text>
      </Circle>
      <HStack justifyContent="center" alignItems="center" cursor="pointer">
        <Text color="white">Next</Text>
        <ArrowRightIcon />
      </HStack>
    </HStack>
  );
}
