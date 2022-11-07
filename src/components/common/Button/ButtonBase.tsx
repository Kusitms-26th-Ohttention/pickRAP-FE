import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  custom?:
    | (SerializedStyles | ((theme: Theme) => SerializedStyles))[]
    | SerializedStyles
    | ((theme: Theme) => SerializedStyles);
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

export const CSSBlackButton = (theme: Theme) => css`
  background: ${theme.color.black01};
  color: ${theme.color.white01};
  border-color: ${theme.color.black01};
`;

export const CSSWhiteButton = (theme: Theme) => css`
  background: ${theme.color.white01};
  color: ${theme.color.gray08};
  border-color: ${theme.color.gray08};
`;

export default ButtonBase;
