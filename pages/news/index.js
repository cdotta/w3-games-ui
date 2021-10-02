import React from 'react';

import { NewsSections } from '../../components/news';
import Page from '../../components/Page';
import axios from '../../lib/cmsAxios';

export const NewsContext = React.createContext({});

export default function News(properties) {
  return (
    <NewsContext.Provider value={properties}>
      <Page>
        {NewsSections.map((NewsSection, index) => (
          <NewsSection key={index} />
        ))}
      </Page>
    </NewsContext.Provider>
  );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps() {
  const [
    { data: mainNews },
    { data: topStories },
    { data: trendingNews },
    { data: latestNews },
    { data: gamesNews },
  ] = await Promise.all([
    axios.get('main-news').catch(() => {}),
    axios.get('top-stories').catch(() => []),
    axios.get('trending-news').catch(() => []),
    axios.get('latest-news').catch(() => []),
    axios.get('games-news').catch(() => []),
  ]);
  return {
    props: {
      mainNews: mainNews || null,
      topStories: topStories || null,
      trendingNews: trendingNews || null,
      latestNews: latestNews || null,
      gamesNews: gamesNews || null,
    },
  };
}
