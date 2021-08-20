import { Image } from '@chakra-ui/react';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import HCTA from '../HCTA';
import { ArrowSquareDownIcon, NoteTextIcon } from '../icons/index';

export default function LandingHomeCTA() {
  return (
    <HCTA
      additionalContentHeight="80px"
      ctaInfo={
        <CTAInfo
          title="Innovating gaming with the power of blockchain"
          description="Find out how you can be a part of the drive to advance web3 games and take your web3 game project to a whole new level"
          primaryButtonText="Read whitepaper"
          primaryButtonIcon={<NoteTextIcon w={6} h={6} />}
          secondaryButtonText="Find out more"
          secondaryButtonIcon={<ArrowSquareDownIcon w={6} h={6} />}
        />
      }
      background={
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
      }
    />
  );
}
