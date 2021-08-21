import React from 'react';

import { GamesCTAs } from '../../components/games';
import Page from '../../components/Page';

export default function Games() {
  return (
    <Page>
      {GamesCTAs.map((GamesCTA, index) => (
        <GamesCTA key={index} />
      ))}
    </Page>
  );
}
