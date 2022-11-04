import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  custom?: SerializedStyles | ((theme: Theme) => SerializedStyles);
}

const ButtonBase = (props: ButtonBaseProps) => {
  const { children, custom, ...rest } = props;

  return (
    <button css={[CSSButtonBase, custom]} {...rest}>
      {children}
    </button>
  );
};
const CSSButtonBase = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  ${theme.font.M_POINT_15};
`;

export default ButtonBase;
