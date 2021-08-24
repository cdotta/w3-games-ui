import React from 'react';

import { IncubateCTAs } from '../../components/incubate';
import Page from '../../components/Page';

export default function Incubate() {
  return (
    <Page>
      {IncubateCTAs.map((IncubateCTA, index) => (
        <IncubateCTA key={index} />
      ))}
    </Page>
  );
}
