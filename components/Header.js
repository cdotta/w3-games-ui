import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { HamburgerIcon, UserIcon } from './icons';
import MediaButtonsGroup from './MediaButtonsGroup';

const NAV_ITEMS = [
  { label: 'Home', route: '/' },
  { label: 'Games', route: '/games' },
  { label: 'News', route: '/news' },
  { label: 'Incubate', route: '/incubate' },
  { label: 'Guild', route: '/guild' },
  { label: 'About us', route: '/about-us' },
];

const customOrangeColor = 'customOrange.500';

const NavItem = ({ navItem, isActive }) => (
  <Link href={navItem.route} passHref>
    <Flex as="a" px="4" alignItems="center" height="100%">
      <Stack spacing="0.5" align="center">
        <Text color={isActive ? customOrangeColor : 'white'}>
          {navItem.label}
        </Text>
        <Box
          as="span"
          h="6px"
          w="6px"
          borderRadius="50%"
          bgColor={isActive ? customOrangeColor : 'transparent'}
        />
      </Stack>
    </Flex>
  </Link>
);

export const mobileHeaderHeight = '64px';
export const regularHeaderHeight = '80px';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Flex position="relative">
      <Flex
        pl={['6', '10']}
        h={[mobileHeaderHeight, regularHeaderHeight]}
        w="100%"
        bgColor="warmBlack"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Flex pr="14" flexShrink="0">
            <Image
              width="40"
              height="37"
              src="/svgs/w3-logo.svg"
              alt="w3 logo"
            />
          </Flex>
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
        <Flex
          h="100%"
          alignItems="center"
          display={['none', 'none', 'none', 'flex']}
        >
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
        <Flex
          h="100%"
          alignItems="center"
          display={['flex', 'flex', 'flex', 'none']}
          position="relative"
        >
          <IconButton
            h="100%"
            borderRadius="0"
            w={mobileHeaderHeight}
            colorScheme="customBlack"
            aria-label="My Account"
            icon={<HamburgerIcon w="5" />}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <IconButton
            h="100%"
            borderRadius="0"
            w={mobileHeaderHeight}
            colorScheme="customOrange"
            aria-label="My Account"
            icon={<UserIcon w="6" h="6" />}
          />
        </Flex>
      </Flex>
      {isMenuOpen && (
        <Flex
          backgroundColor="white"
          top={[mobileHeaderHeight, regularHeaderHeight]}
          w="48"
          right="0"
          position="absolute"
          zIndex="docked"
          display={['flex', 'flex', 'flex', 'none']}
          flexDirection="column"
        >
          <Box position="relative">
            <VStack align="start" paddingLeft="6" paddingY="6" spacing="4">
              {NAV_ITEMS.map(({ label, route }, index) => {
                const isActive = router.asPath === route;

                return (
                  <Link key={index} href={route} passHref>
                    <Text
                      as="a"
                      color={isActive ? customOrangeColor : 'black'}
                      borderRight={isActive ? '4px solid' : ''}
                      width="100%"
                      zIndex="dropdown"
                    >
                      {label}
                    </Text>
                  </Link>
                );
              })}
            </VStack>
            <MediaButtonsGroup alignSelf="center" color="black" />
            <Box
              position="absolute"
              w="1"
              h="100%"
              background="gray.300"
              top="0"
              right="0"
            />
          </Box>
        </Flex>
      )}
    </Flex>
  );
}
