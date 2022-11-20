import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

type SwipeBackgroundProps =
  | { type: 'image'; src?: string }
  | { type: 'text'; text?: string }
  | { type: 'link'; preview?: unknown };

const SwipeBackground = (props: SwipeBackgroundProps) => {
  return (
    <div
      css={css`
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        height: 58vh;
        max-width: 440px;
        margin: auto;
      `}
    >
      {props.type === 'image' ? (
        <Image src={props.src || '/icon/scrap/defaultCategory.svg'} layout="fill" objectFit={'cover'} />
      ) : props.type === 'text' ? (
        <span
          css={(theme) => css`
            background: ${theme.color.gray02};
            word-wrap: break-word;
            color: ${theme.color.white01};
            line-height: 160%;
            width: 100vw;
            max-width: 440px;
            height: 58vh;
            ${theme.font.R_BODY_12};
            padding: 100px 18px 0 18px;
            display: table-cell;
            white-space: pre-wrap;
          `}
        >
          {props.text}
        </span>
      ) : // TODO link preview
      null}
    </div>
  );
};

export default SwipeBackground;
