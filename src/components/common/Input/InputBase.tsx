import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';
import type { InputHTMLAttributes } from 'react';
import React from 'react';

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  custom?: SerializedStyles | ((theme: Theme) => SerializedStyles);
  rightPlaceholder?: JSX.Element | string;
  errMsg?: string;
}

const InputBase = ({ custom, rightPlaceholder, errMsg, ...rest }: InputBaseProps) => {
  return (
    <div>
      <div
        css={css`
          width: 100%;
          position: relative;
        `}
      >
        <input
          type="text"
          css={[
            CSSInputBase,
            errMsg
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
      {errMsg && <span css={CSSErrMsg}>{errMsg}</span>}
    </div>
  );
};

const CSSRightPlaceholder = css`
  position: absolute;
  margin: auto 0;
  height: fit-content;
  top: 0;
  right: 14px;
  bottom: 0;
`;

const CSSInputBase = (theme: Theme) => css`
  padding: 14px 12px;
  ${theme.font.R_BODY_14}
  border: 1px solid ${theme.color.gray09};
  color: ${theme.color.gray08};
  width: 100%;
  &::placeholder {
    color: ${theme.color.gray08};
  }
`;

const CSSErrMsg = (theme: Theme) => css`
  color: ${theme.color.red01};
  padding-top: 6px;
`;

export default InputBase;
