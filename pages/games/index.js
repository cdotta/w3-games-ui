import React from 'react';

import { GamesSections } from '../../components/games';
import Page from '../../components/Page';

export default function Games() {
  return (
    <Page>
      {GamesSections.map((GamesSection, index) => (
        <GamesSection key={index} />
      ))}
    </Page>
  );
}
