import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';

import { revisitDetailState, tagDetailState } from '@/application/store/analysis/analysisState';
import AnalysisNavigation from '@/components/analysis/\bAnaNavigation/AnalysisNavigation';
import { ThreeDotsSpinner } from '@/components/common/Spinner';
import Tab from '@/components/common/Tab';
import AnalysisListContainer from '@/containers/analysis/AnalysisListContainer';
import RevisitAnalysisDetail from '@/containers/analysis/RevisitAnalysis/RevisitAnalysisDetail';
import TagAnalysisDetail from '@/containers/analysis/TagAnalysis/TagAnalysisDetail';
import withNavigation from '@/containers/HOC/withNavigation';
import SSRSafeSuspense from '@/containers/Suspense';

const Analysis: NextPage = () => {
  const [tagState, setTagState] = useRecoilState(tagDetailState);
  const [revisitState, setRevisitState] = useRecoilState(revisitDetailState);

  return (
    <>
      {!tagState ? (
        <AnalysisNavigation onClick={() => setRevisitState(!revisitState)} backArrowState={revisitState}>
          분석
        </AnalysisNavigation>
      ) : (
        <AnalysisNavigation onClick={() => setTagState(!tagState)} backArrowState={tagState}>
          내 스크랩 분석
        </AnalysisNavigation>
      )}
      <Tab>
        <SSRSafeSuspense fallback={<ThreeDotsSpinner />}>
          <Tab.Panel>
            <Tab.Content>
              {!tagState && !revisitState ? (
                <AnalysisListContainer />
              ) : tagState ? (
                <TagAnalysisDetail />
              ) : (
                <RevisitAnalysisDetail />
              )}
            </Tab.Content>
          </Tab.Panel>
        </SSRSafeSuspense>
      </Tab>
    </>
  );
};

export default withNavigation(Analysis);
