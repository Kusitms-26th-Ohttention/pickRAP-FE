import { css } from '@emotion/react';
import type { InputHTMLAttributes } from 'react';
import { useState } from 'react';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

const CheckBox = ({ children, onChange, checked, ...rest }: CheckBoxProps) => {
  const [isChecked, setChecked] = useState(checked);
  return (
    <label
      css={(theme) =>
        css`
          display: block;
          position: relative;
          color: ${theme.color.gray06};
          ${theme.font.R_BODY_12};
          cursor: pointer;
          padding-left: 26px;
          height: 20px;
          line-height: 20px;
          vertical-align: middle;
          &:hover input ~ span {
            background-color: white;
          }

          input:checked ~ span:after {
            display: block;
          }
        `
      }
    >
      <input
        {...rest}
        type="checkbox"
        name={children}
        checked={isChecked}
        onChange={(e) => {
          setChecked((p) => !p);
          onChange?.(e);
        }}
        css={css`
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        `}
      />
      {children}
      <span
        css={(theme) => css`
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          background-color: white;
          border: 1px solid ${theme.color.gray08};

          &:after {
            content: '';
            position: absolute;
            display: none;

            left: 6px;
            top: 2px;
            width: 5px;
            height: 10px;
            border: solid ${theme.color.gray06};
            border-width: 0 1.5px 1.5px 0;
            transform: rotate(45deg);
          }
        `}
      />
    </label>
  );
};

export default CheckBox;
