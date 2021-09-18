import React from 'react';

import { HomeSections } from '../components/home';
import Page from '../components/Page';
import axios from '../lib/cmsAxios';

export const HomeContext = React.createContext({});

export default function Home(properties) {
  return (
    <HomeContext.Provider value={properties}>
      <Page>
        {HomeSections.map((HomeSection, index) => (
          <HomeSection key={index} />
        ))}
      </Page>
    </HomeContext.Provider>
  );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps() {
  const { data } = await axios.get('partners').catch(() => []);
  return {
    props: {
      partners: data || null,
    },
  };
}
