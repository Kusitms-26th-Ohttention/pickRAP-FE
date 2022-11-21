import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

const PageEditContainer = () => {
  return (
    <div>
      <span
        css={(theme) =>
          css`
            ${theme.font.B_POINT_20};
            line-height: 160%;
            color: ${theme.color.black02};
            margin-top: 26px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
          `
        }
      >
        하늘
        <button
          css={css`
            margin-left: 6px;
            width: 22px;
            height: 22px;
            position: relative;
          `}
        >
          <Image src={'/icon/edit.svg'} layout={'fill'} objectFit={'cover'} />
        </button>
      </span>
    </div>
  );
};

export default PageEditContainer;
