import { css } from '@emotion/react';

import { useGetRecommendMagazines } from '@/application/hooks/api/magazine';

import RecommendPhotoListContainer from './RecommendPhotoListContainer';

const RecommendListContainer = () => {
  // const recommendMagazineList = useGetRecommendMagazines();

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
