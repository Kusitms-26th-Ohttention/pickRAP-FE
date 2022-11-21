import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

// TODO TopNavigationBase 작성 후 리팩토링
interface ShowPageNavigationProps {
  name: string;
  onStar?: () => void;
  onEdit?: () => void;
}
const ShowPageNavigation = ({ name, onEdit, onStar }: ShowPageNavigationProps) => {
  const router = useRouter();
  return (
    <div
      css={(theme) => css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding-bottom: 12px;
        border-bottom: 2px solid ${theme.color.black02};
      `}
    >
      <div>
        <Image src={'/icon/backArrow.svg'} width={10} height={17} onClick={() => router.back()} />
        <span
          css={(theme) =>
            css`
              ${theme.font.B_BODY_20};
              line-height: 26px;
              letter-spacing: 0.005em;
              color: ${theme.color.black02};
              margin-left: 20px;
            `
          }
        >
          {name}
        </span>
      </div>

      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Image src={'/icon/magazine/stars.svg'} width={32} height={32} onClick={onStar} />
        <span style={{ width: 10 }} />
        <Image src={'/icon/magazine/edit.black.svg'} width={22} height={22} onClick={onEdit} />
      </div>
    </div>
  );
};

export default ShowPageNavigation;
