import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const NAV_ITEMS = [
  { label: 'Home', id: 1, route: '/' },
  { label: 'Games', id: 2, route: '/games' },
  { label: 'News', id: 3, route: '/news' },
  { label: 'Incubate', id: 4, route: '/incubate' },
  { label: 'About us', id: 5, route: '/about-us' },
];

export default function Header() {
  return (
    <Flex
      pl="10"
      h="80px"
      w="100%"
      bgColor="warmBlack"
      alignItems="center"
      overflow="hidden"
    >
      <Box pr="14">
        <Image maxWidth="unset" src="/svgs/w3-logo.svg" alt="w3-logo" />
      </Box>
      {NAV_ITEMS.map((navItem) => (
        <Link key={navItem.id} href={navItem.route} passHref>
          <Flex as="a" px="4" alignItems="center" height="100%">
            <Text color="white">{navItem.label}</Text>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
}
