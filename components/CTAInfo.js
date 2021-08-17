import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function CTAInfo({ title, description }) {
  return (
    <Box>
      <Heading size="2xl" mb="4">
        {title}
      </Heading>
      <Text fontSize="xl" mb="8">
        {description}
      </Text>
    </Box>
  );
}
