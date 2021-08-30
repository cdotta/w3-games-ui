import React from 'react';

import { IncubateSections } from '../../components/incubate';
import Page from '../../components/Page';

export default function Incubate() {
  return (
    <Page>
      {IncubateSections.map((IncubateSection, index) => (
        <IncubateSection key={index} />
      ))}
    </Page>
  );
}
