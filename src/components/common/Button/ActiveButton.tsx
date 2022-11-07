import type { ButtonHTMLAttributes } from 'react';

import ButtonBase, { CSSBlackButton, CSSWhiteButton } from '@/components/common/Button/ButtonBase';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const ActiveButton = ({ active, children, ...rest }: ButtonProps) => {
  return (
    <ButtonBase custom={active ? CSSBlackButton : CSSWhiteButton} {...rest}>
      {children}
    </ButtonBase>
  );
};
