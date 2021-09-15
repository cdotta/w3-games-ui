import { Image, SimpleGrid } from '@chakra-ui/react';
import React, { useContext } from 'react';

import { HomeContext } from '../../pages';
import Background from '../Background';
import CTAInfo from '../CTAInfo';
import VCTA from '../VCTA';

export default function PartnersHomeCTA() {
  const { partners } = useContext(HomeContext);

  return (
    <VCTA
      background={<Background bgColor="black" />}
      direction="column"
      isFullHeight={false}
      ctaInfo={
        <CTAInfo
          textAlign="center"
          title="We are partnered with the biggest names in the industry"
        />
      }
      ctaContent={
        <SimpleGrid
          columns={['2', '2', '3', '4']}
          spacingX="24"
          spacingY="14"
          alignItems="center"
          justifyContent="center"
        >
          {partners
            .sort((a, b) => a.order - b.order)
            .map(({ logo, name }, index) => (
              <Image maxHeight="100px" key={index} src={logo.url} alt={name} />
            ))}
        </SimpleGrid>
      }
    />
  );
}
