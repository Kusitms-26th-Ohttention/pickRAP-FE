import { css } from '@emotion/react';
import React from 'react';

import { useGetContentByCategory } from '@/application/hooks/api/category';
import PhotoListContainer from '@/containers/scrap/PhotoListContainer';

interface CategoryDetailContainerProps {
  info: { id: number; name: string };
  select?: boolean;
}

const CategoryDetailContainer = ({ select, info }: CategoryDetailContainerProps) => {
  const { categories } = useGetContentByCategory({ id: info.id });

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
        {info.name}
      </span>
      <PhotoListContainer data={categories} select={select} />
    </>
  );
};

export default CategoryDetailContainer;
