import type { NextPage } from 'next';

import withNavigation from '@/containers/HOC/withNavigation';

const Magazine: NextPage = () => {
  return <>Magazine With Navigation</>;
};

export default withNavigation(Magazine);
