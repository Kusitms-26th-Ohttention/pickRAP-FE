import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

type SwipeBackgroundProps =
  | { type: 'img'; src: string }
  | { type: 'memo'; text: string }
  | { type: 'link'; preview: unknown };

const SwipeBackground = (props: SwipeBackgroundProps) => {
  return (
    <div
      css={css`
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 58vh;
      `}
    >
      {props.type === 'img' ? (
        <Image src={props.src} layout="fill" objectFit={'cover'} />
      ) : props.type === 'memo' ? (
        <span
          css={(theme) => css`
            background: ${theme.color.gray02};
            word-wrap: break-word;
            color: ${theme.color.white01};
            line-height: 160%;
            width: 100%;
            height: 58vh;
            ${theme.font.R_BODY_12};
            padding: 0 18px;
            display: table-cell;
            vertical-align: middle;
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
