import { css } from '@emotion/react';
import React, { useCallback, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { useGetCategories } from '@/application/hooks/api/category';
import { categoryIdsArray } from '@/application/store/category/categoryState';
import { getSrcByType } from '@/application/utils/helper';
import CategoryListItem from '@/components/category/List/CategoryListItem';

interface CategoryListContainerProps {
  select: boolean;
  selectItem?: boolean;
  onClickItem: (info: { id: number; name: string }) => void;
}

const CategoryListContainer = ({ select, selectItem, onClickItem }: CategoryListContainerProps) => {
  const { categories } = useGetCategories();
  const setCategoryItems = useSetRecoilState(categoryIdsArray);
  const pickSet = useRef(new Set<number>());

  const selectCategoryItems = useCallback(
    (id: number) => {
      pickSet.current.has(id) ? pickSet.current.delete(id) : pickSet.current.add(id);
      setCategoryItems(Array.from(pickSet.current));
    },
    [pickSet, setCategoryItems],
  );

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
          {categories?.map((category) => (
            <div key={category.id} onClick={() => !selectItem && onClickItem({ id: category.id, name: category.name })}>
              <div onClick={() => selectItem && selectCategoryItems(category.id)}>
                <CategoryListItem
                  select={select}
                  src={getSrcByType(category) ?? '/icon/scrap/defaultCategory.svg'}
                  title={category.name}
                />
              </div>
            </div>
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
