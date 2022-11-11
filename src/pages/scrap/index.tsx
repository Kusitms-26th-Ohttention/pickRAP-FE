import type { NextPage } from 'next';

import withNavigation from '@/containers/HOC/withNavigation';

const Scrap: NextPage = () => {
  return <>Scrap With Navigation</>;
};

export default withNavigation(Scrap);
