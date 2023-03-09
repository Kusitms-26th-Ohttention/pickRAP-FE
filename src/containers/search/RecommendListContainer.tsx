import { css } from '@emotion/react';

import RecommendPhotoListContainer from './RecommendPhotoListContainer';

const RecommendListContainer = () => {
  return (
    <>
      <span style={{ height: 12 }} />
      <p
        css={(theme) => css`
          ${theme.font.M_POINT_18}
          margin-bottom: 8px;
        `}
      >
        추천 매거진
      </p>
      <RecommendPhotoListContainer />
    </>
  );
};

export default RecommendListContainer;
