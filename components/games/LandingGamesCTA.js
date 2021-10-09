import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';

import { getSafeImageUrl } from '../../lib/imageSourceHelper';
import { GamesContext } from '../../pages/games';
import Carousel from '../Carousel';
import CarouselPaginator from '../CarouselPaginator';
import { HeartIcon, SearchIcon, ShopIcon, SmsIcon } from '../icons';
import ImageWithLoading from '../ImageWithLoading';

const filterTags = ['Adventure', 'Card', 'Action', 'Sports', 'Puzzle'];

export default function LandingGamesCTA() {
  const { carouselGames } = useContext(GamesContext);
  const [activePage, setActivePage] = useState(1);

  return (
    <Box
      bgColor="black"
      pt={['2', '20']}
      paddingX={['2', '2', '10', '40']}
      overflow="hidden"
    >
      <Container maxWidth="container.md">
        <Heading size="2xl" color="white" textAlign="center">
          Discover leading web 3 games from top creators
        </Heading>
        <Text fontSize="xl" color="white" textAlign="center">
          Play curated web 3 games from top blockchain game developers around
          the world. Have fun while acquiring one of a kind items, NFTs, and
          collectibles.
        </Text>
      </Container>
      <HStack
        mt={['4', '12']}
        mb={['2', '10']}
        spacing="4"
        flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            color="white"
            bgColor="warmBlack"
            border="black"
            placeholder="Search for game title"
          />
        </InputGroup>
        {filterTags.map((filterTag) => (
          <Button
            colorScheme="warmBlackButton"
            key={filterTag}
            fontWeight="light"
            borderRadius="30px"
            flexShrink="0"
          >
            {filterTag}
          </Button>
        ))}
        <HStack
          flexShrink="0"
          bgColor="warmBlack"
          borderRadius="30px"
          paddingX="2"
        >
          <IconButton
            colorScheme="transparent"
            icon={<SmsIcon h={5} w={5} />}
          />
          <IconButton
            colorScheme="transparent"
            icon={<HeartIcon h={5} w={5} />}
          />
          <IconButton
            colorScheme="transparent"
            icon={<ShopIcon h={5} w={5} />}
          />
        </HStack>
      </HStack>
      {carouselGames.length > 0 && (
        <>
          <Carousel
            value={activePage - 1}
            onChange={() => {}}
            slides={carouselGames.map((carouselGame, index) => (
              <Link
                key={index}
                href={carouselGames[activePage - 1].href}
                isExternal
              >
                <ImageWithLoading
                  className="radius-18"
                  src={getSafeImageUrl(carouselGame.image)}
                  alt="carousel game"
                  width="1120px"
                  height="550px"
                  objectFit="cover"
                />
              </Link>
            ))}
          />
          <CarouselPaginator
            pages={carouselGames.length}
            activePage={activePage}
            onPageChange={(page) => setActivePage(page)}
          />
        </>
      )}
    </Box>
  );
}
