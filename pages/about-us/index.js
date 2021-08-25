import React from 'react';

import { AboutUsCTAs } from '../../components/about-us';
import Page from '../../components/Page';

export default function AboutUs() {
  return (
    <Page>
      {AboutUsCTAs.map((AboutUsCTA, index) => (
        <AboutUsCTA key={index} />
      ))}
    </Page>
  );
}
