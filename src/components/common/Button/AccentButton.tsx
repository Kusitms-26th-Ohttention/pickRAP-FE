import { css } from '@emotion/react';
import type { ButtonHTMLAttributes } from 'react';

import ButtonBase, { CSSBlackButton } from '@/components/common/Button/ButtonBase';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const AccentButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ButtonBase
      custom={[
        CSSBlackButton,
        css`
          padding: 14px 0;
          box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
        `,
      ]}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};
