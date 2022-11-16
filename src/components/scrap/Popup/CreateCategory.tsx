import { css } from '@emotion/react';
import React from 'react';

import { useInput } from '@/application/hooks/useInput';
import { ActiveButton } from '@/components/common/Button';
import { InputBase, InputLabel } from '@/components/common/Input';

interface CreateCategoryProps {
  onSubmit?: (category: string) => void;
  isError?: boolean;
}

// TODO api 중복 카테고리 검증 후 오류 있으면 isError
const CreateCategory = ({ onSubmit, isError }: CreateCategoryProps) => {
  const [category, setCategory] = useInput({ maxLength: 20 });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(category);
        category && onSubmit?.(category);
      }}
      css={css`
        padding: 16px;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <InputLabel htmlFor={'category'}>카테고리명</InputLabel>
        <InputBase
          rightPlaceholder={`${category.length}/20`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id={'category'}
        />
        <span
          css={(theme) =>
            css`
              ${theme.font.M_POINT_11};
              color: ${theme.color.red01};
              line-height: 160%;
              vertical-align: middle;
              position: absolute;
              bottom: -26px;
            `
          }
        >
          {isError ? '이미 있는 카테고리 입니다' : <>&nbsp;</>}
        </span>
      </div>

      <ActiveButton
        active
        custom={css`
          margin-top: 16px;
          width: 74px;
          height: 40px;
          padding: 0;
          align-self: flex-end;
        `}
      >
        생성
      </ActiveButton>
    </form>
  );
};

export default CreateCategory;
