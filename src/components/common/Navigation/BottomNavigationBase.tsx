import { css } from '@emotion/react';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface BottomNavigationBaseProps {
  children: (NavCell: FC<ButtonHTMLAttributes<HTMLButtonElement>>) => ReactNode;
}

const BottomNavigationBase = ({ children }: BottomNavigationBaseProps) => {
  return (
    <nav
      css={css`
        display: flex;
        z-index: 100;
        background: white;
        width: 100vw;
        position: absolute;
        bottom: -60px;
        left: -16px;
        max-width: 440px;
        padding-top: 12px;
        box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.03);
      `}
    >
      {children(({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => (
        <button
          {...rest}
          css={css`
            flex: 1 1 auto;
            position: relative;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            padding-bottom: 12px;
          `}
        />
      ))}
    </nav>
  );
};

export default BottomNavigationBase;
