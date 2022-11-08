import type { SerializedStyles, Theme } from '@emotion/react';
import type { ButtonHTMLAttributes } from 'react';

import ButtonBase, { CSSBlackButton, CSSWhiteButton } from '@/components/common/Button/ButtonBase';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  custom?:
    | (SerializedStyles | ((theme: Theme) => SerializedStyles))[]
    | SerializedStyles
    | ((theme: Theme) => SerializedStyles);
}

export const ActiveButton = ({ active, children, custom, ...rest }: ButtonProps) => {
  const styles = [active ? CSSBlackButton : CSSWhiteButton] as (
    | SerializedStyles
    | ((theme: Theme) => SerializedStyles)
  )[];
  if (custom && Array.isArray(custom)) styles.concat(...custom);
  else if (custom) styles.push(custom);

  return (
    <ButtonBase custom={styles} {...rest}>
      {children}
    </ButtonBase>
  );
};
