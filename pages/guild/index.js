import React from 'react';

import { GuildSections } from '../../components/guild';
import Page from '../../components/Page';

export default function Guild() {
  return (
    <Page>
      {GuildSections.map((GuildSection, index) => (
        <GuildSection key={index} />
      ))}
    </Page>
  );
}
