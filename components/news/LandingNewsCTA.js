import {
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';

import { getSafeImageUrl } from '../../lib/imageSourceHelper';
import { NewsContext } from '../../pages/news';
import { BlackArrowRightIcon } from '../icons/index';

export default function LandingNewsCTA() {
  const { mainNews, topStories, trendingNews } = useContext(NewsContext);
  return (
    <VStack
      background="black"
      paddingX="10"
      paddingY="20"
      spacing="10"
      alignItems="flex-start"
    >
      <Flex
        justify="center"
        width="100%"
        justifyContent="flex-start"
        alignItems="stretch"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Link
          href={mainNews.href}
          isExternal
          _hover={{ textDecoration: 'none' }}
          display="flex"
          flexGrow="1"
          mr={['0', '0', '0', '10']}
          minH={['lg', 'lg', 'lg', 'lg', 'lg', '4xl']}
          backgroundImage={`linear-gradient(119.17deg, #F5F6F8 13.96%, rgba(245, 246, 248, 0) 67.05%), url('${mainNews.background.url}')`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <VStack maxW="sm" pt="10" pl="10" alignItems="flex-start" spacing={4}>
            <Heading>{mainNews.title}</Heading>
            <HStack>
              <Image
                src={getSafeImageUrl(mainNews.author_image, 'thumbnail')}
                alt="author picture"
                fit="cover"
                borderRadius="full"
                boxSize="30px"
              />
              <Text>{mainNews.author_name}</Text>
            </HStack>
            <Text>{mainNews.description}</Text>
          </VStack>
        </Link>

        <Flex maxW="md" bgColor="white" mt={['10', '10', '10', '0']}>
          <Flex flexDirection="column" p="9">
            <Heading as="h1" fontSize="xl" fontWeight="extrabold">
              Top Stories
            </Heading>
            <Flex flexDirection="column" alignItems="center">
              {topStories.map(({ title, href }, index) => (
                <Link key={index} href={href} isExternal>
                  <HStack spacing="4" py="7">
                    <Text fontSize="lg">{title}</Text>
                    <BlackArrowRightIcon />
                  </HStack>
                  <Divider orientation="horizontal" />
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" bgColor="white" flexDirection="column" p="10">
        <Heading as="h1" fontSize="xl" fontWeight="extrabold">
          Trending
        </Heading>
        <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent="center"
        >
          {trendingNews.map(({ title, description, image, href }, index) => {
            return (
              <Link
                href={href}
                isExternal
                display="flex"
                key={index}
                py="12"
                pr="4"
                flexDirection={['column', 'row']}
              >
                <Image
                  src={getSafeImageUrl(image, 'small')}
                  alt="trending-description"
                  width="36"
                  height="24"
                  marginX={['0', '2']}
                  marginY={['2', '0']}
                />
                <Flex
                  flexDirection="column"
                  height="24"
                  justifyContent="space-around"
                >
                  <Text fontWeight="bold">{title}</Text>
                  <Text fontSize="sm">{description}</Text>
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </VStack>
  );
}
