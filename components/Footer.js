import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import { ArrowRightIcon } from './icons/index';
import MediaButtonsGroup from './MediaButtonsGroup';

const sections = [
  {
    title: 'Partners',
    links: [
      { label: 'Collaborate' },
      { label: 'Incubate' },
      { label: 'Feature Game' },
    ],
  },
  {
    title: 'Information',
    links: [{ label: 'FAQ' }, { label: 'News' }, { label: 'Support' }],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us' },
      { label: 'Careers' },
      { label: 'Contact us' },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      bgColor="warmBlack"
      paddingY="10"
      display="flex"
      justifyContent="center"
      overflow="hidden"
    >
      <VStack width="fit-content" spacing="16">
        <HStack spacing="40">
          {sections.map(({ title, links }) => (
            <VStack key={title} align="flex-start">
              <Text fontWeight="semibold" color="white" mb="1">
                {title}
              </Text>
              {links.map(({ label }, index) => (
                <Text color="white" opacity="0.75" key={index}>
                  {label}
                </Text>
              ))}
            </VStack>
          ))}
          <Box bgColor="rgba(255, 255, 255, 0.1)" p="10" pt="5">
            <FormControl id="email">
              <FormLabel color="white" fontWeight="semibold">
                Receive weekly news updates
              </FormLabel>
              <InputGroup>
                <Input
                  background="white"
                  height="14"
                  minWidth="30"
                  placeholder="Email address"
                  type="email"
                />
                <InputRightElement h="100%">
                  <IconButton
                    aria-label="Search database"
                    colorScheme="customOrange"
                    borderLeftRadius="0"
                    height="inherit"
                    minWidth="14"
                    icon={<ArrowRightIcon />}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Box>
        </HStack>
        <Divider color="white" opacity="0.2" />
        <HStack justify="space-between" width="100%">
          <Box pr="14" flexShrink="0">
            <Image
              width="40"
              height="37"
              src="/svgs/w3-logo-gray.svg"
              alt="w3 logo"
            />
          </Box>
          <HStack>
            <Text fontSize="sm" color="white">
              Terms
            </Text>
            <Text fontSize="sm" color="white">
              Privacy
            </Text>
            <Text fontSize="sm" color="white">
              Cookies
            </Text>
          </HStack>
          <MediaButtonsGroup />
        </HStack>
      </VStack>
    </Box>
  );
}
