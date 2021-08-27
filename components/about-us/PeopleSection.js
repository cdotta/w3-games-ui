import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

import CTAInfo from '../CTAInfo';

export default function PeopleSection() {
  return (
    <Flex
      backgroundColor="black"
      paddingY={['2', '20', '28']}
      direction="column"
      alignItems="center"
    >
      <Image src="/images/about-us-people.png" alt="about us people"></Image>
      <Box maxW="2xl">
        <CTAInfo
          title="A talented and diverse team"
          description="Join us in making your web3 game a masterpiece with immense value and even bigger upside. Our team of amazingly skilled game lovers are here to help you every step of the way"
          textAlign="center"
        />
      </Box>
    </Flex>
  );
}
