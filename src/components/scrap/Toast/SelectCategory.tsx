import { css } from '@emotion/react';

import Photo from '@/components/common/Photo';

interface SelectCategoryProps {
  onClose?: () => void;
  categories: SelectCategoryItemProps[];
}

interface SelectCategoryItemProps {
  src: string;
  name: string;
  onClick?: () => any;
}

const SelectCategoryItem = ({ src, name, onClick }: SelectCategoryItemProps) => {
  return (
    <li
      onClick={onClick}
      css={css`
        display: grid;
        grid-template-columns: 36px 1fr;
        height: 36px;
        gap: 10px;
        align-items: center;
      `}
    >
      <Photo
        src={src}
        custom={css`
          border-radius: 2px;
        `}
      />
      {name}
    </li>
  );
};

const defaultAndNewCategory = [
  { src: '/icon/scrap/defaultCategory.svg', name: '카테고리 미지정' },
  { src: '/icon/scrap/newCategory.svg', name: '새로운 카테고리 생성' },
];

const SelectCategory = ({ onClose, categories }: SelectCategoryProps) => {
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
            ${theme.font.B_POINT_16};
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
        {[...categories, ...defaultAndNewCategory].map((category) => (
          <SelectCategoryItem key={category.src} {...category} />
        ))}
      </ul>
    </section>
  );
};

export default SelectCategory;
