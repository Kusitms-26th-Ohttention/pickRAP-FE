import { css } from '@emotion/react';
import React from 'react';

import { useInput } from '@/application/hooks/useInput';
import { ActiveButton } from '@/components/common/Button';
import { InputBase, InputLabel } from '@/components/common/Input';

interface CreateCategoryProps {
  onSubmit?: (category: string) => void;
  isError?: boolean;
}

// TODO (refactor) 에러 메세지 constant 파일 분리
const CREATE_CATEGORY_ERROR = '이미 있는 제목입니다.';

// TODO api 중복 카테고리 검증 후 오류 있으면 isError
const CreateCategory = ({ onSubmit, isError }: CreateCategoryProps) => {
  const [category, setCategory] = useInput({ maxLength: 15 });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        category && onSubmit?.(category);
      }}
      css={css`
        padding: 24px 16px;
        gap: 32px;
        display: flex;
        flex-direction: column;
        background: white;
      `}
    >
      <div>
        <InputLabel htmlFor={'category'}>카테고리명</InputLabel>
        <InputBase
          rightPlaceholder={`${category.length}/15`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id={'category'}
        />
        {isError ? (
          <span
            css={(theme) =>
              css`
                margin-top: 6px;
                ${theme.font.R_BODY_13};
                color: ${theme.color.red01};
                line-height: 160%;
              `
            }
          >
            {CREATE_CATEGORY_ERROR}
          </span>
        ) : null}
      </div>
      <div
        css={css`
          display: flex;
          gap: 24px;
          justify-content: center;
        `}
      >
        <ActiveButton
          custom={css`
            width: 88px;
            height: 40px;
            padding: 0;
          `}
        >
          취소
        </ActiveButton>
        <ActiveButton
          active
          custom={css`
            width: 88px;
            height: 40px;
            padding: 0;
          `}
        >
          생성
        </ActiveButton>
      </div>
    </form>
  );
};

export default CreateCategory;
