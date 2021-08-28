import React from 'react';

import { HomeSections } from '../components/home';
import Page from '../components/Page';

export default function Home() {
  return (
    <Page>
      {HomeSections.map((HomeSection, index) => (
        <HomeSection key={index} />
      ))}
    </Page>
  );
}
