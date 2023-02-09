import { css } from '@emotion/react';

import { useGetRevisitAnalysis } from '@/application/hooks/api/analysis';
import NoRevisit from '@/components/analysis/Revisit/NoRevisit';
import RevisitPhotoList from '@/components/analysis/Revisit/RevisitPhotoList';
import RevisitTitle from '@/components/analysis/Revisit/RevisitTitle';

const RevisitAnalysisDetail = () => {
  const { revisitAnalysis } = useGetRevisitAnalysis();

  return (
    <>
      <div
        css={css`
          height: 100%;
          overflow: hidden;
          position: relative;
          margin-top: 45px;
        `}
      >
        <div
          css={css`
            position: absolute;
            overflow: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          `}
        >
          {revisitAnalysis.length === 0 ? (
            <NoRevisit />
          ) : (
            <>
              <div
                css={css`
                  margin: 10px 0;
                `}
              >
                <RevisitTitle active={true} />
              </div>
              <div css={CSSPhotoListContainer}>
                {revisitAnalysis.map((thum) => (
                  <RevisitPhotoList key={thum.scrap_id} thumId={thum.scrap_id} thum={thum} title={thum.title} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const CSSPhotoListContainer = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(60px, 1fr));
  gap: 9px;
  margin-top: 24px;
`;

export default RevisitAnalysisDetail;
