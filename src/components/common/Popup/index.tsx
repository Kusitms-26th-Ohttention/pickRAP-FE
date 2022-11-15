import { css } from '@emotion/react';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';

interface PopupProps {
  type: 'success' | 'warn';
}

const Popup = ({ type, children }: PropsWithChildren<PopupProps>) => {
  return (
    <div
      css={(theme) => css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        ${theme.font.B_POINT_16};
        color: ${theme.color.black02};
        line-height: 184%;
        gap: 30px;
      `}
    >
      {type === 'success' ? (
        <Image src={'/picture/success.svg'} width={84} height={90} />
      ) : (
        <Image src={'/picture/warn.svg'} width={73} height={99} />
      )}
      {children}
    </div>
  );
};

export default Popup;
