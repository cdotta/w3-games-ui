import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NAV_ITEMS = [
  { label: 'Home', route: '/' },
  { label: 'Games', route: '/games' },
  { label: 'News', route: '/news' },
  { label: 'Incubate', route: '/incubate' },
  { label: 'About us', route: '/about-us' },
];

export default function Header() {
  const router = useRouter();

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
        <Image width="40" height="37" src="/svgs/w3-logo.svg" alt="w3-logo" />
      </Box>
      {NAV_ITEMS.map((navItem) => (
        <Link key={navItem.route} href={navItem.route} passHref>
          <Flex as="a" px="4" alignItems="center" height="100%">
            <Stack spacing="0.5" align="center">
              <Text
                color={
                  router.asPath === navItem.route ? 'customOrange.500' : 'white'
                }
              >
                {navItem.label}
              </Text>
              <Box
                as="span"
                h="6px"
                w="6px"
                borderRadius="50%"
                bgColor={
                  router.asPath === navItem.route
                    ? 'customOrange.500'
                    : 'transparent'
                }
              />
            </Stack>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
}
