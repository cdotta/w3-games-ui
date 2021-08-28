import React from 'react';

import { NewsSections } from '../../components/news';
import Page from '../../components/Page';

export default function News() {
  return (
    <Page>
      {NewsSections.map((NewsSection, index) => (
        <NewsSection key={index} />
      ))}
    </Page>
  );
}
