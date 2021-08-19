import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function CTAInfo({
  title,
  description,
  primaryButtonText,
  primaryButtonIcon,
  secondaryButtonText,
  secondaryButtonIcon,
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
          mr={6}
          rightIcon={primaryButtonIcon}
        >
          {primaryButtonText}
        </Button>
      )}
      {secondaryButtonText && (
        <Button
          size="lg"
          colorScheme="customOrange"
          rightIcon={secondaryButtonIcon}
        >
          {secondaryButtonText}
        </Button>
      )}
    </Box>
  );
}
