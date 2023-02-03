import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { useGetRevisitAnalysis } from '@/application/hooks/api/analysis';
import { revisitDetailState } from '@/application/store/analysis/analysisState';

import SubAnaNavigation from './AnaNavigation/SubAnaNavigation';
import RevisitTitle from './Revisit/RevisitTitle';

const RevisitContent = () => {
  const [revisitState, setRevisitState] = useRecoilState(revisitDetailState);
  const { revisitAnalysis } = useGetRevisitAnalysis();
  console.log(revisitAnalysis);

  const handleClickMoreBtn = () => {
    setRevisitState(!revisitState);
  };

  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <SubAnaNavigation moreState={true} onClick={handleClickMoreBtn}>
        재방문 콘텐츠
      </SubAnaNavigation>
      <div
        css={css`
          height: 315px;
        `}
      >
        <div
          css={css`
            height: 100%;
            padding: 12px 0 32px;
          `}
        >
          <RevisitTitle active={false} />
        </div>
      </div>
    </div>
  );
};

export default RevisitContent;
