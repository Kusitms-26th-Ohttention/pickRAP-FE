import { css } from '@emotion/react';
import type { PropsWithChildren, ReactElement } from 'react';
import { cloneElement } from 'react';

import { useGetCategories } from '@/application/hooks/api/category';
import useToast from '@/application/hooks/common/useToast';
import SelectCategoryItem from '@/components/category/Select/SelectCategoryItem';

interface Props {
  nextToast: ReactElement;
  onClickItem?: (id: number) => void;
}

const SelectCategory = ({ children, nextToast, onClickItem }: PropsWithChildren<Props>) => {
  const { categories } = useGetCategories();
  const { replace } = useToast();
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        gap: 32px;
      `}
    >
      <span
        css={(theme) =>
          css`
            ${theme.font.B_POINT_17};
            color: ${theme.color.black02};
          `
        }
      >
        카테고리 선택
      </span>
      <ul
        css={(theme) => css`
          display: flex;
          flex-direction: column;
          gap: 24px;
          color: ${theme.color.gray03};
          ${theme.font.M_BODY_14};
          line-height: 160%;
        `}
      >
        {categories.map((category) => (
          <SelectCategoryItem
            // TODO file name constant
            key={category.file_url || '/icon/scrap/defaultCategory.svg'}
            {...category}
            file_url={category.file_url || '/icon/scrap/defaultCategory.svg'}
            onClick={() => {
              onClickItem?.(category.id);
              replace({ content: cloneElement(nextToast, { ...category }) });
            }}
          />
        ))}
        {children}
      </ul>
    </section>
  );
};

export default SelectCategory;
