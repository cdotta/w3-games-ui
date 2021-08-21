import { createIcon } from '@chakra-ui/icon';

import arrowRightSvg from '../../public/svgs/arrow-right.svg';
import arrowSquareDownSvg from '../../public/svgs/arrow-square-down.svg';
import clockSvg from '../../public/svgs/clock.svg';
import discordSvg from '../../public/svgs/discord.svg';
import gamesSvg from '../../public/svgs/games.svg';
import genreSvg from '../../public/svgs/genre.svg';
import mediumSvg from '../../public/svgs/medium.svg';
import noteTextSvg from '../../public/svgs/note-text.svg';
import telegramSvg from '../../public/svgs/telegram.svg';
import twitterSvg from '../../public/svgs/twitter.svg';
import userSvg from '../../public/svgs/user.svg';

export const NoteTextIcon = createIcon({
  displayName: 'NoteTextIcon',
  viewBox: '0 0 22 22',
  path: noteTextSvg(),
});

export const ArrowSquareDownIcon = createIcon({
  displayName: 'ArrowSquareDownIcon',
  viewBox: '0 0 20 20',
  path: arrowSquareDownSvg(),
});

export const ArrowRightIcon = createIcon({
  displayName: 'ArrowRightIcon',
  viewBox: '0 0 17 14',
  path: arrowRightSvg(),
});

export const GamesIcon = createIcon({
  displayName: 'GamesIcon',
  viewBox: '0 0 19 19',
  path: gamesSvg(),
});

export const UserIcon = createIcon({
  displayName: 'UserIcon',
  viewBox: '0 0 16 16',
  path: userSvg(),
});

export const TelegramIcon = createIcon({
  displayName: 'TelegramIcon',
  viewBox: '0 0 24 24',
  path: telegramSvg(),
});

export const DiscordIcon = createIcon({
  displayName: 'DiscordIcon',
  viewBox: '0 0 24 24',
  path: discordSvg(),
});

export const TwitterIcon = createIcon({
  displayName: 'TwitterIcon',
  viewBox: '0 0 24 24',
  path: twitterSvg(),
});

export const MediumIcon = createIcon({
  displayName: 'MediumIcon',
  viewBox: '0 0 24 24',
  path: mediumSvg(),
});

export const ClockIcon = createIcon({
  displayName: 'ClockIcon',
  viewBox: '0 0 22 22',
  path: clockSvg(),
});

export const GenreIcon = createIcon({
  displayName: 'GenreIcon',
  viewBox: '0 0 15 14',
  path: genreSvg(),
});
