import { HStack, IconButton } from '@chakra-ui/react';
import React from 'react';

import { DiscordIcon, MediumIcon, TelegramIcon, TwitterIcon } from './icons';

export default function MediaButtonsGroup(properties) {
  return (
    <HStack {...properties}>
      <IconButton
        aria-label="Telegram icon"
        icon={<TelegramIcon h={6} w={6} />}
        colorScheme="transparent"
      />
      <IconButton
        aria-label="Discord icon"
        icon={<DiscordIcon h={6} w={6} />}
        colorScheme="transparent"
      />
      <IconButton
        aria-label="Twitter icon"
        icon={<TwitterIcon h={6} w={6} />}
        colorScheme="transparent"
      />
      <IconButton
        aria-label="medium icon"
        icon={<MediumIcon h={6} w={6} />}
        colorScheme="transparent"
      />
    </HStack>
  );
}
