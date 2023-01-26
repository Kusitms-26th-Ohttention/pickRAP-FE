import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { revisitDetailState } from '@/application/store/analysis/analysisState';

import SubAnaNavigation from './AnaNavigation/SubAnaNavigation';

const RevisitContent = () => {
  const [revisitState, setRevisitState] = useRecoilState(revisitDetailState);

  const handleClickMoreBtn = () => {
    setRevisitState(!revisitState);
  };

  console.log('클릭 재방문콘텐츠 더보기', revisitState);

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
          재방문 콘텐츠
        </div>
      </div>
    </div>
  );
};

export default RevisitContent;
