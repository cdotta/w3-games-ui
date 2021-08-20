import { HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import HCTA from '../HCTA';
import { GamesIcon } from '../icons/index';

const images = {
  firstStack: [
    { src: '/images/star-atlas.png', alt: 'star atlas' },
    { src: '/images/axie-infinity.png', alt: 'axie infinity' },
  ],
  secondStack: [
    { src: '/images/war-of-crypta.png', alt: 'war of crypta' },
    { src: '/images/the-sandbox.png', alt: 'the sandbox' },
  ],
};

export default function GamesHomeCTA() {
  return (
    <HCTA
      background={<Background bgColor="black" />}
      ctaInfo={
        <CTAInfo
          title="Access the very best web3 games"
          description="Curated web3 games designed for your ultimate pleasure. Discover and play original titles from our partners"
          secondaryButtonText="Discover games"
          secondaryButtonIcon={<GamesIcon w={6} h={6} />}
        />
      }
      ctaContent={
        <HStack>
          <VStack>
            {images.firstStack.map(({ src, alt }, index) => (
              <Image key={index} src={src} alt={alt} />
            ))}
          </VStack>
          <VStack>
            {images.secondStack.map(({ src, alt }, index) => (
              <Image key={index} src={src} alt={alt} />
            ))}
          </VStack>
        </HStack>
      }
    />
  );
}
