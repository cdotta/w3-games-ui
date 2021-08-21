import { Flex, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import VCTA from '../VCTA';

const images = [
  { src: '/images/partners/binance.png', alt: 'binance' },
  { src: '/images/partners/coinbase.png', alt: 'coinbase' },
  { src: '/images/partners/solana.png', alt: 'solana' },
  { src: '/images/partners/polkadot.png', alt: 'polkadot' },
  { src: '/images/partners/ethereum.png', alt: 'docker' },
  { src: '/images/partners/dinox.png', alt: 'dinox' },
  { src: '/images/partners/activision.png', alt: 'activision' },
  { src: '/images/partners/fear.png', alt: 'fear' },
  { src: '/images/partners/microsoft.png', alt: 'microsoft' },
  { src: '/images/partners/theta.png', alt: 'theta' },
  { src: '/images/partners/dao-maker.png', alt: 'dao maker' },
  { src: '/images/partners/blizzard.png', alt: 'blizzard' },
];

// TODO: Replace Image

export default function PartnersHomeCTA() {
  return (
    <VCTA
      background={<Background bgColor="black" />}
      direction="column"
      ctaInfo={
        <CTAInfo
          textAlign="center"
          title="We are partnered with the biggest names in the industry"
        />
      }
      ctaContent={
        <SimpleGrid
          columns="4"
          spacingX="24"
          spacingY="14"
          alignItems="center"
          justifyContent="center"
        >
          {images.map(({ src, alt }, index) => (
            <Flex key={index} flexShrink="0" justifyContent="center">
              <Image src={src} alt={alt} />
            </Flex>
          ))}
        </SimpleGrid>
      }
    />
  );
}
