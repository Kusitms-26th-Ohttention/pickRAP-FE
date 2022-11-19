import { css } from '@emotion/react';
import React from 'react';

import { MOCK_GET_CATEGORIES } from '@/application/utils/mock';
import CategoryListItem from '@/components/scrap/CategoryListItem';
interface CategoryListContainerProps {
  select: boolean;
  onClickItem: (id: number) => () => void;
}

const CategoryListContainer = ({ select, onClickItem }: CategoryListContainerProps) => {
  const data = MOCK_GET_CATEGORIES; // TODO get Category with useQuery
  return (
    <div
      css={css`
        height: 100%;
        overflow: hidden;
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          overflow: auto;
          top: 0;
          padding: 26px 0;
          left: 0;
          right: 0;
          bottom: 0;
        `}
      >
        <div css={CSSCategoryListContainer}>
          {data.map((category) => (
            <CategoryListItem
              onClick={onClickItem(category.id)}
              select={select}
              src={category.file_url}
              title={category.name}
              key={category.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CSSCategoryListContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;
`;

export default CategoryListContainer;
