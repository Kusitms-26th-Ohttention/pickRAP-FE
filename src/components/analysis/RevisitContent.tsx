import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { useGetRevisitAnalysis } from '@/application/hooks/api/analysis';
import { revisitDetailState } from '@/application/store/analysis/analysisState';

import Photo from '../common/Photo';
import SubAnaNavigation from './AnaNavigation/SubAnaNavigation';
import RevisitTitle from './Revisit/RevisitTitle';

const RevisitContent = () => {
  const [revisitState, setRevisitState] = useRecoilState(revisitDetailState);
  const { revisitAnalysis } = useGetRevisitAnalysis();
  const revisitContentThum = revisitAnalysis.slice(0, 2);
  console.log(revisitContentThum);

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
          height: 100%;
          padding: 12px 0 32px;
        `}
      >
        <RevisitTitle active={false} />
        <div css={CSSPhotoListContainer}>
          {revisitContentThum.map((thum) => (
            <Photo
              key={thum.scrap_id}
              custom={css`
                aspect-ratio: 1/1;
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CSSPhotoListContainer = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(60px, 1fr));
  gap: 9px;
  margin-top: 24px;
`;

export default RevisitContent;
