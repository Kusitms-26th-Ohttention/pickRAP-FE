import type { NextPage } from 'next';

import withAuth from '@/containers/HOC/withAuth';
import withNavigation from '@/containers/HOC/withNavigation';

const analysis: NextPage = () => {
  return <div>analysis</div>;
};

export default withAuth(withNavigation(analysis));
