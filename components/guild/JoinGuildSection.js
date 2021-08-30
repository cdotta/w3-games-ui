import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const insights = [
  { value: '01', label: 'Kickass Guild' },
  { value: '12K', label: 'Guild Members' },
  { value: '25M', label: 'Total Earnings' },
];

const steps = [
  {
    description: 'Create an account or log in',
    imageSrc: '/svgs/user-tag.svg',
    imageAlt: 'user tag icon',
  },
  {
    description: 'Send a request to join guild',
    imageSrc: '/svgs/sms-tracking.svg',
    imageAlt: 'sms tracking icon',
  },
  {
    description: 'Await approval from the guild master',
    imageSrc: '/svgs/bill.svg',
    imageAlt: 'bill icon',
  },
  {
    description: 'Go through initiation and acquire rank',
    imageSrc: '/svgs/award.svg',
    imageAlt: 'award icon',
  },
  {
    description: 'Play, earn, and climb through the ranks',
    imageSrc: '/svgs/video-octagon.svg',
    imageAlt: 'video octagon icon',
  },
];

export default function JoinGuildSection() {
  return (
    <Flex
      backgroundColor="black"
      paddingY={['2', '16']}
      flexDirection="column"
      alignItems="center"
    >
      <Box maxWidth="container.md">
        <Heading size="2xl" color="white" textAlign="center">
          Join the biggest play-to-earn guild
        </Heading>
      </Box>
      <Flex
        mt="14"
        backgroundColor="customGreen"
        width="100%"
        paddingY="9"
        paddingX="6"
        justifyContent="space-evenly"
        flexDirection={['column', 'column', 'row']}
      >
        {insights.map(({ value, label }, index) => (
          <HStack key={index}>
            <Heading as="span" color="white" size="4xl">
              {value}
            </Heading>
            <Divider opacity="1" h="16" orientation="vertical" />
            <Text color="white" maxW="28" fontSize="xl">
              {label}
            </Text>
          </HStack>
        ))}
      </Flex>

      <Flex
        mt="14"
        flexDirection={['column', 'column', 'row']}
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        {steps.map(({ imageSrc, imageAlt, description }, index) => (
          <Flex key={index} h="48" alignItems="center">
            <Box w="40" paddingY="4">
              <VStack>
                <Image src={imageSrc} alt={imageAlt} />
                <Text color="white" size="lg" textAlign="center">
                  {description}
                </Text>
              </VStack>
            </Box>
            {index !== steps.length - 1 && (
              <Divider
                display={['none', 'initial']}
                opacity="0.3"
                marginX="7"
                orientation="vertical"
              />
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
