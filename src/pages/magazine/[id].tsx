import type { NextPage } from 'next';
import React from 'react';

import { PAGES } from '@/application/utils/mock';
import PageViewContainer from '@/containers/magazine/PageViewContainer';

const ShowMagazine: NextPage = () => {
  // TODO useQuery with router.query.id
  return <PageViewContainer pages={PAGES} />;
};

export default ShowMagazine;
