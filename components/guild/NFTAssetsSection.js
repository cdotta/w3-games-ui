import { Box, Flex, Image, Text } from '@chakra-ui/react';

import CTAInfo from '../CTAInfo';

const services = [
  {
    description: 'NFTs Game Assets',
    imageSrc: '/images/guild/assets.png',
    imageAlt: 'NFTs Game Assets',
  },
  {
    description: 'Tutorials and Guides',
    imageSrc: '/images/guild/guide.png',
    imageAlt: 'Tutorials and Guides',
  },
  {
    description: 'Guidance and Support',
    imageSrc: '/images/guild/guidance.png',
    imageAlt: 'Guidance and Support',
  },
];

export default function NFTAssetsSection() {
  return (
    <Flex
      backgroundColor="black"
      paddingY={['2', '16']}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex maxW="container.lg">
        <CTAInfo
          textAlign="center"
          title="Access everything you need to start"
          description="We provide our members with the NFT assets, tutorials, and support they need to overcome the barrier of entry to play-to-earn popular games like Axie Infinity."
        />
      </Flex>
      <Flex
        width="full"
        justify="space-evenly"
        mt="10"
        flexDirection={['column', 'column', 'row']}
      >
        {services.map(({ description, imageSrc, imageAlt }, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            justify="space-between"
          >
            <Flex width="56" height="56" align="center">
              <Image src={imageSrc} alt={imageAlt}></Image>
            </Flex>
            <Text textColor="white" my="4">
              {description}
            </Text>
            <Box bgColor="white" h="0.5" borderRadius="20px" width="8" />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
