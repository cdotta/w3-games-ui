import React from 'react';

import { NewsCTAs } from '../../components/news';
import Page from '../../components/Page';

export default function News() {
  return (
    <Page>
      {NewsCTAs.map((NewsCTA, index) => (
        <NewsCTA key={index} />
      ))}
    </Page>
  );
}
