import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import HCTA from '../HCTA';
import { GamesIcon } from '../icons/index';

export default function GamesHomeCTA() {
  return (
    <HCTA
      background={<Background bgColor="warmBlack" />}
      ctaInfo={
        <CTAInfo
          title="Access the very best web3 games"
          description="Curated web3 games designed for your ultimate pleasure. Discover and play original titles from our partners"
          secondaryButtonText="Discover games"
          secondaryButtonIcon={<GamesIcon w={6} h={6} />}
        />
      }
    />
  );
}
