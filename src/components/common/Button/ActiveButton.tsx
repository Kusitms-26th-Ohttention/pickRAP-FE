import { css } from '@emotion/react';
import type { ButtonHTMLAttributes } from 'react';

import ButtonBase from '@/components/common/Button/ButtonBase';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const ActiveButton = ({ active, children, ...rest }: ButtonProps) => {
  return (
    <ButtonBase
      custom={(theme) =>
        active
          ? css`
              background: ${theme.color.black01};
              color: ${theme.color.white01};
              border-color: ${theme.color.black01};
            `
          : css`
              background: ${theme.color.white01};
              color: ${theme.color.gray08};
              border-color: ${theme.color.gray08};
            `
      }
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};
