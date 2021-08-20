import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { UserIcon } from './icons';
import MediaButtonsGroup from './MediaButtonsGroup';

const NAV_ITEMS = [
  { label: 'Home', route: '/' },
  { label: 'Games', route: '/games' },
  { label: 'News', route: '/news' },
  { label: 'Incubate', route: '/incubate' },
  { label: 'About us', route: '/about-us' },
];

const NavItem = ({ navItem, isActive }) => (
  <Link href={navItem.route} passHref>
    <Flex as="a" px="4" alignItems="center" height="100%">
      <Stack spacing="0.5" align="center">
        <Text color={isActive ? 'customOrange.500' : 'white'}>
          {navItem.label}
        </Text>
        <Box
          as="span"
          h="6px"
          w="6px"
          borderRadius="50%"
          bgColor={isActive ? 'customOrange.500' : 'transparent'}
        />
      </Stack>
    </Flex>
  </Link>
);

export default function Header() {
  const router = useRouter();

  return (
    <Flex
      pl="10"
      h="80px"
      w="100%"
      bgColor="warmBlack"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
    >
      <Flex alignItems="center">
        <Box pr="14" flexShrink="0">
          <Image width="40" height="37" src="/svgs/w3-logo.svg" alt="w3 logo" />
        </Box>
        {NAV_ITEMS.map((navItem) => (
          <Box
            key={navItem.route}
            display={['none', 'none', 'none', 'inherit']}
          >
            <NavItem
              navItem={navItem}
              isActive={router.asPath === navItem.route}
            />
          </Box>
        ))}
      </Flex>
      <Flex h="100%" alignItems="center" display={['none', 'none', 'flex']}>
        <MediaButtonsGroup mr="4" />
        <Button
          fontSize="md"
          h="100%"
          rightIcon={<UserIcon w={4} h={4} />}
          borderRadius="0"
          size="lg"
          colorScheme="customOrange"
        >
          My Account
        </Button>
      </Flex>
    </Flex>
  );
}
