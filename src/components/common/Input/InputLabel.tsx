import { css } from '@emotion/react';
import type { LabelHTMLAttributes } from 'react';

type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const InputLabel = ({ children, ...rest }: InputLabelProps) => {
  return (
    <label
      {...rest}
      css={(theme) =>
        css`
          ${theme.font.B_POINT_17};
          margin-bottom: 8px;
          line-height: 160%;
        `
      }
    >
      {children}
    </label>
  );
};

export default InputLabel;
