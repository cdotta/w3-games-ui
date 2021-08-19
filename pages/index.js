import { Image } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import Background from '../components/Background';
import CTA from '../components/CTA';
import {
  ArrowSquareDownIcon,
  GamesIcon,
  NoteTextIcon,
} from '../components/icons/index';
import Page from '../components/Page';

export default function Home() {
  const desertBackground = useMemo(
    () => (
      <Background
        bgImageUrl="/images/desert-background.png"
        secondaryImage={
          <Image
            h="90%"
            position="absolute"
            bottom="0"
            right="50"
            src="/images/pirate.png"
            alt="pirate"
          />
        }
      />
    ),
    [],
  );

  const blackBackground = useMemo(() => <Background bgColor="warmBlack" />, []);

  return (
    <Page>
      <CTA
        title="Innovating gaming with the power of blockchain"
        description="Find out how you can be a part of the drive to advance web3 games and take your web3 game project to a whole new level"
        primaryButtonText="Read whitepaper"
        primaryButtonIcon={<NoteTextIcon w={6} h={6} />}
        secondaryButtonText="Find out more"
        secondaryButtonIcon={<ArrowSquareDownIcon w={6} h={6} />}
        additionalContentHeight="80px"
        background={desertBackground}
      />
      <CTA
        title="Access the very best web3 games"
        description="Curated web3 games designed for your ultimate pleasure. Discover and play original titles from our partners"
        secondaryButtonText="Discover games"
        secondaryButtonIcon={<GamesIcon w={6} h={6} />}
        background={blackBackground}
      />
    </Page>
  );
}
