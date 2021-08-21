import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function CTAInfo({
  title,
  description,
  primaryButton,
  secondaryButtonText,
  secondaryButtonIcon,
  textAlign,
  fontSizeTitle = '2xl',
  fontSizeDescription = 'xl',
}) {
  return (
    <Box>
      <Heading size={fontSizeTitle} mb="4" color="white" textAlign={textAlign}>
        {title}
      </Heading>
      <Text fontSize={fontSizeDescription} color="white" textAlign={textAlign}>
        {description}
      </Text>
      {primaryButton && (
        <Button
          mt="8"
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
          mt="8"
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
