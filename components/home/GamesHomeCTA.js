import { HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import HCTA from '../HCTA';
import { GamesIcon } from '../icons/index';

const images = {
  firstStack: [
    {
      src: '/images/games/gods-unchained.png',
      alt: 'gods unchained',
      width: '300px',
      height: '300px',
    },
    {
      src: '/images/games/axie-infinity.png',
      alt: 'axie infinity',
      width: '300px',
      height: '380px',
    },
  ],
  secondStack: [
    {
      src: '/images/games/war-of-crypta.png',
      alt: 'war of crypta',
      width: '300px',
      height: '380px',
    },
    {
      src: '/images/games/the-sandbox.png',
      alt: 'the sandbox',
      width: '300px',
      height: '300px',
    },
  ],
};

// TODO: Replace Image

export default function GamesHomeCTA() {
  const imageMapFunction = ({ src, alt, width, height }, index) => (
    <Image
      key={index}
      src={src}
      alt={alt}
      width={width}
      height={height}
      fit="cover"
    />
  );

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
            {images.firstStack.map((image, index) =>
              imageMapFunction(image, index),
            )}
          </VStack>
          <VStack>
            {images.secondStack.map((image, index) =>
              imageMapFunction(image, index),
            )}
          </VStack>
        </HStack>
      }
    />
  );
}
