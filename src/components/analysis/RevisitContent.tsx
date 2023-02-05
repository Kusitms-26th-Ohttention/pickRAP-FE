import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { useGetRevisitAnalysis } from '@/application/hooks/api/analysis';
import { revisitDetailState } from '@/application/store/analysis/analysisState';
import { getSrcByType } from '@/application/utils/helper';
import SubAnaNavigation from '@/components/analysis/AnaNavigation/SubAnaNavigation';
import NoRevisit from '@/components/analysis/Revisit/NoRevisit';
import RevisitTitle from '@/components/analysis/Revisit/RevisitTitle';
import Photo from '@/components/common/Photo';

const RevisitContent = () => {
  const router = useRouter();
  const [revisitState, setRevisitState] = useRecoilState(revisitDetailState);
  const { revisitAnalysis } = useGetRevisitAnalysis();
  const revisitContentThum = revisitAnalysis.slice(0, 2);

  const handleClickMoreBtn = () => {
    setRevisitState(!revisitState);
  };

  const handleClickPhoto = (thumId: number) => {
    router.push(`/scrap/${thumId}`);
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
        {revisitAnalysis.length === 0 ? (
          <NoRevisit />
        ) : (
          <>
            <RevisitTitle active={false} />
            <div css={CSSPhotoListContainer}>
              {revisitContentThum.map((thum) => (
                <Photo
                  key={thum.scrap_id}
                  custom={css`
                    aspect-ratio: 1/1;
                  `}
                  onClick={() => handleClickPhoto(thum.scrap_id)}
                  src={getSrcByType(thum)}
                />
              ))}
            </div>
          </>
        )}
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
