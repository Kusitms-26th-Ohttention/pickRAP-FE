import { css } from '@emotion/react';

import RevisitTitle from '@/components/analysis/Revisit/RevisitTitle';

const RevisitAnalysisDetail = () => {
  return (
    <>
      <div
        css={css`
          height: 100%;
          margin-top: 50px;
        `}
      >
        <RevisitTitle active={true} />
      </div>
    </>
  );
};

export default RevisitAnalysisDetail;
