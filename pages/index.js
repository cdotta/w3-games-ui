import React from 'react';

import { HomeCTAs } from '../components/home';
import Page from '../components/Page';

export default function Home() {
  return (
    <Page>
      {HomeCTAs.map((HomeCTA, index) => (
        <HomeCTA key={index} />
      ))}
    </Page>
  );
}
