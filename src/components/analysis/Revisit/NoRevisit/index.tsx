import { css } from '@emotion/react';
import Image from 'next/image';

const NoRevisit = () => {
  return (
    <div
      css={(theme) => css`
        display: flex;
        padding-top: 2vh;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: center;
        gap: 20px;
        ${theme.font.M_POINT_14};
        color: ${theme.color.gray06};
      `}
    >
      <span
        css={css`
          position: relative;
          transform: translateX(-4px);
          height: 10vh;
          width: 155px;
        `}
      >
        <Image src={'/picture/warn.svg'} layout="fill" objectFit={'contain'} />
      </span>
      <span>모든 콘텐츠를 방문하였습니다.</span>
    </div>
  );
};

export default NoRevisit;
