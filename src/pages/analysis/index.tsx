import type { NextPage } from 'next';

import AnalysisNavigation from '@/components/analysis/\bAnaNavigation/AnalysisNavigation';
import { ThreeDotsSpinner } from '@/components/common/Spinner';
import AnalysisListContainer from '@/containers/analysis/AnalysisListContainer';
import withNavigation from '@/containers/HOC/withNavigation';
import SSRSafeSuspense from '@/containers/Suspense';

const Analysis: NextPage = () => {
  return (
    <>
      <AnalysisNavigation />
      <SSRSafeSuspense fallback={<ThreeDotsSpinner />}>
        <AnalysisListContainer />
      </SSRSafeSuspense>
    </>
  );
};

export default withNavigation(Analysis);
