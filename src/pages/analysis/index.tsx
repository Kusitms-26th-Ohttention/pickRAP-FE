import type { NextPage } from 'next';

import AnalysisNavigation from '@/components/analysis/AnaNavigation/AnalysisNavigation';
import AnalysisListContainer from '@/containers/analysis/AnalysisListContainer';
import withNavigation from '@/containers/HOC/withNavigation';

const Analysis: NextPage = () => {
  return (
    <>
      <AnalysisNavigation />
      <AnalysisListContainer />
    </>
  );
};

export default withNavigation(Analysis);
