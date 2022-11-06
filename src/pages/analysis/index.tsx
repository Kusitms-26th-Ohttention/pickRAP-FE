import type { NextPage } from 'next';

import withAuth from '@/containers/HOC/withAuth';

const analysis: NextPage = () => {
  return <div>analysis</div>;
};

export default withAuth(analysis);
