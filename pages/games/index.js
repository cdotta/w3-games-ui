import React from 'react';

import { GamesSections } from '../../components/games';
import Page from '../../components/Page';
import axios from '../../lib/cmsAxios';

export const GamesContext = React.createContext({});

export default function Games(properties) {
  return (
    <GamesContext.Provider value={properties}>
      <Page>
        {GamesSections.map((GamesSection, index) => (
          <GamesSection key={index} />
        ))}
      </Page>
    </GamesContext.Provider>
  );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps() {
  const [
    { data: carouselGames },
    { data: comingSoonGames },
    { data: discoverGames },
    { data: trendingGames },
  ] = await Promise.all([
    axios.get('carousel-games').catch(() => ({ data: [] })),
    axios.get('coming-soon-games').catch(() => ({ data: [] })),
    axios.get('discover-games').catch(() => ({ data: [] })),
    axios.get('trending-games').catch(() => ({ data: [] })),
  ]);

  return {
    props: {
      carouselGames: carouselGames || null,
      comingSoonGames: comingSoonGames || null,
      discoverGames: discoverGames || null,
      trendingGames: trendingGames || null,
    },
    revalidate: 60,
  };
}
