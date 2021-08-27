import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

import Background from '../Background';
import CTAInfo from '../CTAInfo';
import HCTA from '../HCTA';

const description =
  'We strongly believe that the future of gaming is going to be blockchain based and we are committed to pursuing this future by investing our time and effort into making and supporting high quality web3 games.';

export const visions = [
  {
    title: 'We love making and playing great games',
    description,
    isReverse: true,
    src: '/images/visions/vision-1.png',
    alt: 'vision',
  },
  {
    title: 'We believe in the future of web3 games',
    description,
    src: '/images/visions/vision-2.png',
    alt: 'vision',
  },
  {
    title: 'We applaud innovation and foresight',
    description,
    isReverse: true,
    src: '/images/visions/vision-3.png',
    alt: 'vision',
  },
  {
    title: 'We’re fueled by desire and coffee :)',
    description,
    src: '/images/visions/vision-4.png',
    alt: 'vision',
  },
];

export default function VisionsSection() {
  return (
    <>
      {visions.map(({ title, description, isReverse, src, alt }, index) => {
        return (
          <HCTA
            key={index}
            background={<Background bgColor="black" />}
            isReverse={isReverse}
            ctaInfo={
              <>
                <CTAInfo title={title} description={description} />
              </>
            }
            ctaContent={
              <Flex pl="10">
                <Image src={src} alt={alt} />
              </Flex>
            }
          />
        );
      })}
    </>
  );
}
