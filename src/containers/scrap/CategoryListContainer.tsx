import { css } from '@emotion/react';
import React from 'react';

import { MOCK_GET_CATEGORIES } from '@/application/utils/mock';
import CategoryListItem from '@/components/scrap/CategoryListItem';
interface CategoryListContainerProps {
  select: boolean;
}
const CategoryListContainer = ({ select }: CategoryListContainerProps) => {
  const data = MOCK_GET_CATEGORIES; // TODO useQuery
  return (
    <div css={CSSCategoryListContainer}>
      {data.map((category) => (
        <CategoryListItem select={select} src={category.file_url} title={category.name} key={category.id} />
      ))}
    </div>
  );
};

const CSSCategoryListContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default CategoryListContainer;
