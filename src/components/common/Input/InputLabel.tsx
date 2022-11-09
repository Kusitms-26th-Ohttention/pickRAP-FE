import { css } from '@emotion/react';
import type { LabelHTMLAttributes } from 'react';

type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const InputLabel = ({ children, ...rest }: InputLabelProps) => {
  return (
    <label
      {...rest}
      css={(theme) =>
        css`
          ${theme.font.B_POINT_16};
          margin-bottom: 8px;
        `
      }
    >
      {children}
    </label>
  );
};

export default InputLabel;
