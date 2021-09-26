import { HStack, IconButton, Link } from '@chakra-ui/react';
import React from 'react';

import { DiscordIcon, MediumIcon, TelegramIcon, TwitterIcon } from './icons';

export default function MediaButtonsGroup({ color, ...properties }) {
  return (
    <HStack {...properties}>
      <Link href="https://t.me/w3games" isExternal>
        <IconButton
          aria-label="Telegram icon"
          icon={<TelegramIcon h={6} w={6} />}
          color={color}
          colorScheme="transparent"
        />
      </Link>
      <Link href="https://discord.gg/8uJuwEehjP" isExternal>
        <IconButton
          aria-label="Discord icon"
          icon={<DiscordIcon h={6} w={6} />}
          color={color}
          colorScheme="transparent"
        />
      </Link>
      <Link href="https://twitter.com/w3_games" isExternal>
        <IconButton
          aria-label="Twitter icon"
          icon={<TwitterIcon h={6} w={6} />}
          color={color}
          colorScheme="transparent"
        />
      </Link>
      <Link href="https://medium.com/@W3Games" isExternal>
        <IconButton
          aria-label="medium icon"
          icon={<MediumIcon h={6} w={6} />}
          color={color}
          colorScheme="transparent"
        />
      </Link>
    </HStack>
  );
}
