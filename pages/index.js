import { Image } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import Background from '../components/Background';
import CTA from '../components/CTA';
import Page from '../components/Page';

export default function Home() {
  const background = useMemo(
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

  return (
    <Page>
      <CTA
        title="Innovating gaming with the power of blockchain"
        description="Find out how you can be a part of the drive to advance web3 games and take your web3 game project to a whole new level"
        primaryButtonText="Read whitepaper"
        secondaryButtonText="Find out more"
        additionalContentHeight="80px"
        background={background}
      />
    </Page>
  );
}
