import { css } from '@emotion/react';

import Photo from '@/components/common/Photo';

interface SelectCategoryProps extends Pick<Category, 'name' | 'file_url'> {
  onClick: () => void;
}

const SelectCategoryItem = ({ file_url, name, onClick }: SelectCategoryProps) => {
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
        src={file_url}
        custom={css`
          border-radius: 2px;
        `}
      />
      {name}
    </li>
  );
};

export default SelectCategoryItem;
