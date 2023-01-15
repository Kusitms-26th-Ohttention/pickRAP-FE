import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type SwipeBackgroundProps = (
  | { type: 'image'; src?: string }
  | { type: 'text'; text?: string }
  | { type: 'link'; src?: string; href: string }
  | { type: 'video'; src?: string; href: string }
  | { type: 'pdf'; src?: string; href: string }
) & { onClick?: () => void; isFull?: boolean };

const SwipeBackground = (props: SwipeBackgroundProps) => {
  return (
    <div
      css={[
        css`
          user-select: none;
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          height: 58vh;
          max-width: 440px;
          margin: auto;
        `,
        (theme) =>
          props.isFull &&
          css`
            height: 100vh;
            background-color: ${theme.color.black02};
          `,
      ]}
    >
      {props.type === 'image' ? (
        <Image
          onClick={props.onClick}
          priority
          src={props.src || '/icon/scrap/defaultCategory.svg'}
          layout="fill"
          objectFit={props.isFull ? 'contain' : 'cover'}
        />
      ) : props.type === 'text' ? (
        <span
          onClick={props.onClick}
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
      ) : props.type === 'link' ? (
        <Link href={props.href}>
          <a rel="noopener noreferrer" target="_blank">
            <Image priority src={props.src || '/icon/scrap/defaultCategory.svg'} layout="fill" objectFit={'cover'} />
          </a>
        </Link>
      ) : props.type === 'video' ? null : props.type === 'pdf' ? null : null}
    </div>
  );
};

export default SwipeBackground;
