import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import HCTA from '../HCTA';
import MediaButtonsGroup from '../MediaButtonsGroup';

// TODO: Replace Image

export default function CommunityHomeCTA() {
  return (
    <HCTA
      background={<Background bgColor="black" />}
      isReverse
      ctaInfo={
        <>
          <CTAInfo
            title="We have an epic community"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
          <MediaButtonsGroup />
        </>
      }
      ctaContent={
        <Flex pl="20">
          <Image src="/images/community.png" alt="community" />
        </Flex>
      }
    />
  );
}
