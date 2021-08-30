import { Flex, Image } from '@chakra-ui/react';

import CTAInfo from '../CTAInfo';

export default function RankUpSection() {
  return (
    <Flex
      backgroundColor="black"
      paddingY={['2', '16']}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="container.lg"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <CTAInfo
          textAlign="center"
          title="Rank up to gain more perks"
          description="Gain exclusive rewards when you level up and achieve a new rank. Ranks come with specific rank perks, capabilities, and access. Complete guild quests and activities to level up."
        />
        <Image mt="16" src="./images/guild/rewards.png" alt="rewards"></Image>
      </Flex>
    </Flex>
  );
}
