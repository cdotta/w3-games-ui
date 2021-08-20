import { Flex, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import VCTA from '../VCTA';

const images = [
  { src: '/images/binance.png', alt: 'binance' },
  { src: '/images/coinbase.png', alt: 'coinbase' },
  { src: '/images/solana.png', alt: 'solana' },
  { src: '/images/polkadot.png', alt: 'polkadot' },
  { src: '/images/docker.png', alt: 'docker' },
  { src: '/images/dinox.png', alt: 'dinox' },
  { src: '/images/activision.png', alt: 'activision' },
  { src: '/images/fear.png', alt: 'fear' },
  { src: '/images/microsoft.png', alt: 'microsoft' },
  { src: '/images/theta.png', alt: 'theta' },
  { src: '/images/maker.png', alt: 'maker' },
  { src: '/images/blizzard.png', alt: 'blizzard' },
];

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
