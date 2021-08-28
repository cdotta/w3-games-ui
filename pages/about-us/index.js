import React from 'react';

import { AboutUsSections } from '../../components/about-us';
import Page from '../../components/Page';

export default function AboutUs() {
  return (
    <Page>
      {AboutUsSections.map((AboutUsSection, index) => (
        <AboutUsSection key={index} />
      ))}
    </Page>
  );
}
