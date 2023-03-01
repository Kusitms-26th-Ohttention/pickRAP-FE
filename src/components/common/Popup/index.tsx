import { css } from '@emotion/react';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';

interface PopupProps {
  type: 'success' | 'warn';
}

const Popup = ({ type, children }: PropsWithChildren<PopupProps>) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        line-height: 184%;
        gap: 21px;
        padding: 24px;
      `}
    >
      {type === 'success' ? (
        <Image src={'/picture/success.svg'} width={59} height={64} alt="성공표시" />
      ) : (
        <Image src={'/picture/warn.svg'} width={51} height={70} alt="경고표시" />
      )}
      {children}
    </div>
  );
};

export default Popup;
