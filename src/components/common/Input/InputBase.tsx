import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';
import type { InputHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  custom?: SerializedStyles | ((theme: Theme) => SerializedStyles);
  rightPlaceholder?: JSX.Element | string;
  error?: boolean;
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(function Render(
  { custom, rightPlaceholder, error, ...rest },
  ref,
) {
  return (
    <div
      css={css`
        width: 100%;
        position: relative;
      `}
    >
      <input
        ref={ref}
        css={[
          CSSInputBase,
          error
            ? (theme: Theme) => css`
                border-color: ${theme.color.red01};
              `
            : null,
          custom,
        ]}
        {...rest}
      />
      <div css={CSSRightPlaceholder}>{rightPlaceholder}</div>
    </div>
  );
});

const CSSRightPlaceholder = (theme: Theme) => css`
  position: absolute;
  margin: auto 0;
  height: fit-content;
  top: 0;
  right: 14px;
  bottom: 0;
  color: ${theme.color.gray08};
  ${theme.font.R_BODY_12}
`;

const CSSInputBase = (theme: Theme) => css`
  padding: 14px 12px;
  ${theme.font.R_BODY_14}
  border: 1px solid ${theme.color.gray09};
  color: ${theme.color.gray04};
  width: 100%;
  &::placeholder {
    color: ${theme.color.gray08};
  }
  &:focus {
    border-color: ${theme.color.black02};
  }
`;

export default InputBase;
