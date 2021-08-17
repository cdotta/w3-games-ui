import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react'
import CTAInfo from './CTAInfo';

export default function CTA({ title, description }) {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <CTAInfo title={title} description={description} />
      <Box>
        Image
      </Box>
    </SimpleGrid>
  );
}
