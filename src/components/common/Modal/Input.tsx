import { css } from '@emotion/react';
import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';

import { useInput } from '@/application/hooks/common/useInput';
import useToast from '@/application/hooks/common/useToast';
import { ActiveButton } from '@/components/common/Button';
import { InputBase, InputLabel } from '@/components/common/Input';

interface Props {
  onSubmit?: (value: string, errorFn: Dispatch<SetStateAction<boolean>>) => void;
  title: string;
  errMsg?: string;
}

const InputModal = ({ onSubmit, title, errMsg }: Props) => {
  const [category, setCategory] = useInput({ maxLength: 15 });
  const [isError, setIsError] = useState(false);
  const { close } = useToast();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        category && onSubmit?.(category, setIsError);
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
        <InputLabel htmlFor={'category'}>{title}</InputLabel>
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
            {errMsg}
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
          type={'button'}
          onClick={close}
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
          완료
        </ActiveButton>
      </div>
    </form>
  );
};

export default InputModal;
