import { Box, HStack } from '@chakra-ui/react';
import React from 'react';

export default function CarrouselPaginator({ activePage }) {
  const pages = Array.from({ length: 10 });
  return (
    <HStack spacing="2" marginTop="5">
      {pages.map((_, index) => {
        const pageNumber = index + 1;
        return (
          <Box
            bgColor={
              activePage === pageNumber ? 'customOrange.500' : 'warmBlack'
            }
            h="2"
            flexGrow="1"
            borderRadius="20px"
            key={pageNumber}
            cursor="pointer"
          />
        );
      })}
    </HStack>
  );
}
