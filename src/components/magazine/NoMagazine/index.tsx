import { css } from '@emotion/react';
import Image from 'next/image';

const NoMagazine = () => {
  return (
    <div
      css={(theme) => css`
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: center;
        height: 155px;
        gap: 20px;
        ${theme.font.R_BODY_14};
        color: ${theme.color.gray06};
      `}
    >
      <span
        css={css`
          transform: translateX(-4px);
        `}
      >
        <Image src={'/picture/warn.svg'} width={63} height={85} />
      </span>
      <span>저장된 매거진이 없습니다.</span>
    </div>
  );
};

export default NoMagazine;
