import { Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import VCTA from '../VCTA';

const images = [
  { src: '/images/games/age-of-rust.png', alt: 'age of rust' },
  { src: '/images/games/skyweaver.png', alt: 'skyweaver' },
  { src: '/images/games/six-dragons.png', alt: 'six dragons' },
  { src: '/images/games/9-lives.png', alt: '9 lives' },
  { src: '/images/games/dissolution.png', alt: 'dissolution' },
  { src: '/images/games/lost-relics.png', alt: 'lost relics' },
];

export default function CatalogHomeCTA() {
  return (
    <VCTA
      background={<Background bgColor="black" />}
      direction="column"
      ctaInfo={
        <CTAInfo
          textAlign="center"
          title="The fun never ends with our extensive catalog"
        />
      }
      ctaContent={
        <SimpleGrid columns="3" spacing="8">
          {images.map(({ src, alt }, index) => (
            <Image
              height="352px"
              width="352px"
              key={index}
              src={src}
              alt={alt}
              fit="cover"
            />
          ))}
        </SimpleGrid>
      }
    />
  );
}
