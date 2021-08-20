import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import HCTA from '../HCTA';
import { GamesIcon } from '../icons/index';

export default function CommunityHomeCTA() {
  return (
    <HCTA
      background={<Background bgColor="warmBlack" />}
      isReverse
      ctaInfo={
        <CTAInfo
          title="We have an epic community"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          secondaryButtonText="Discover games"
          secondaryButtonIcon={<GamesIcon w={6} h={6} />}
        />
      }
    />
  );
}
