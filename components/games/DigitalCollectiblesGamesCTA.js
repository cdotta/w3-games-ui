import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import HCTA from '../HCTA';
import { ClockIcon } from '../icons/index';

export default function DigitalCollectiblesGamesCTA() {
  return (
    <HCTA
      background={<Background bgColor="black" />}
      ctaInfo={
        <CTAInfo
          title="Digital Collectibles"
          description="There are many variations of passages of Lorem Ipsum available, but the majority."
          primaryButton={{
            title: 'Coming soon',
            icon: <ClockIcon w={6} h={6} />,
            bgColor: 'customBlack.100',
            color: 'white',
          }}
        />
      }
      ctaContent={
        <Flex pr="28">
          <Image
            width="600px"
            height="300px"
            src="/images/collectibles-group.png"
            alt="collectibles group"
          />
        </Flex>
      }
    />
  );
}
