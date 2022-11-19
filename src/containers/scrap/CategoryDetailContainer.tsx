import { css } from '@emotion/react';
import React from 'react';

import { MOCK_GET_CATEGORIES } from '@/application/utils/mock';
import PhotoListContainer from '@/containers/scrap/PhotoListContainer';

interface CategoryDetailContainerProps {
  id: number;
}
const CategoryDetailContainer = ({ id }: CategoryDetailContainerProps) => {
  const data = MOCK_GET_CATEGORIES; // TODO useQuery with category id

  return (
    <>
      <span
        css={(theme) =>
          css`
            ${theme.font.B_POINT_20};
            line-height: 160%;
            color: ${theme.color.black02};
            margin-top: 26px;
            margin-bottom: 12px;
          `
        }
      >
        {'내가 정말 좋아하는 색감'}
      </span>
      <PhotoListContainer data={data} />
    </>
  );
};

export default CategoryDetailContainer;
