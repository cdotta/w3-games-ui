import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function CTAInfo({
  title,
  description,
  primaryButton,
  secondaryButton,
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
          onClick={() =>
            primaryButton.onClick ? primaryButton.onClick() : null
          }
        >
          {primaryButton.title}
        </Button>
      )}
      {secondaryButton && (
        <Button
          mt="8"
          size="lg"
          colorScheme="customOrange"
          rightIcon={secondaryButton.icon}
          onClick={() =>
            secondaryButton.onClick ? secondaryButton.onClick() : null
          }
        >
          {secondaryButton.title}
        </Button>
      )}
    </Box>
  );
}
