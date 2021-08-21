import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function CTAInfo({
  title,
  description,
  primaryButton,
  secondaryButtonText,
  secondaryButtonIcon,
  textAlign,
}) {
  return (
    <Box>
      <Heading size="2xl" mb="4" color="white" textAlign={textAlign}>
        {title}
      </Heading>
      <Text fontSize="xl" mb="8" color="white" textAlign={textAlign}>
        {description}
      </Text>
      {primaryButton && (
        <Button
          size="lg"
          colorScheme="customBlack"
          mr={6}
          rightIcon={primaryButton.icon}
          bgColor={primaryButton.bgColor}
          color={primaryButton.color}
        >
          {primaryButton.title}
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
