import { Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import VCTA from '../VCTA';

const images = [
  { src: '/images/age-of-rust.png', alt: 'age of rust' },
  { src: '/images/skyweaver.png', alt: 'skyweaver' },
  { src: '/images/pyramid.png', alt: 'pyramid' },
  { src: '/images/9-lives.png', alt: '9 lives' },
  { src: '/images/dissolution.png', alt: 'dissolution' },
  { src: '/images/lost-relics.png', alt: 'lost relics' },
];

export default function CatalogHomeCTA() {
  return (
    <VCTA
      background={<Background bgColor="warmBlack" />}
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
            <Image key={index} src={src} alt={alt} />
          ))}
        </SimpleGrid>
      }
    />
  );
}
