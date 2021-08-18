import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import { ArrowSquareDownIcon, NoteTextIcon } from './icons';

export default function CTAInfo({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}) {
  return (
    <Box>
      <Heading size="2xl" mb="4" color="white">
        {title}
      </Heading>
      <Text fontSize="xl" mb="8" color="white">
        {description}
      </Text>
      {primaryButtonText && (
        <Button
          size="lg"
          colorScheme="customBlack"
          rightIcon={<NoteTextIcon w={6} h={6} />}
        >
          {primaryButtonText}
        </Button>
      )}
      {secondaryButtonText && (
        <Button
          size="lg"
          colorScheme="customOrange"
          ml="6"
          rightIcon={<ArrowSquareDownIcon w={6} h={6} />}
        >
          {secondaryButtonText}
        </Button>
      )}
    </Box>
  );
}
