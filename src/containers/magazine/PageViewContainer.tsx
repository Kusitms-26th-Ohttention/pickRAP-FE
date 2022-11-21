import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

import { PAGES } from '@/application/utils/mock';
import Photo from '@/components/common/Photo';
import ShowPageNavigation from '@/components/magazine/TopNavigation/ShowPageNavigation';

interface Props {
  pages: Page[];
}

const MOCK_DATE = '2022.11.02';

const PageViewContainer = ({ pages = PAGES }: Props) => {
  return (
    <>
      <ShowPageNavigation name={'나의 패션'} />
      <div
        css={css`
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-bottom: 2px;
        `}
      >
        <Image src={'/icon/magazine/mockReaction.svg'} width={70} height={24} />
        <span
          css={(theme) =>
            css`
              ${theme.font.R_BODY_12};
              color: ${theme.color.gray06};
              line-height: 26px;
              letter-spacing: 0.005em;
            `
          }
        >
          {MOCK_DATE}
        </span>
      </div>
      <article
        css={css`
          position: relative;
          height: 100%;
        `}
      >
        <ol css={CSSCarouselContainer}>
          {pages.map((page, idx) => (
            <li key={page.page_id} id={`page${idx}`} css={CSSCarouselItem}>
              <Photo src={page.file_url} height={'45vh'} />
              <p css={CSSPageContent}>{page.contents}</p>
              <div css={CSSSnapper} />
              <div css={CSSCarouselHandle}>
                <a href={`#page${idx === 0 ? pages.length - 1 : idx - 1}`}>Prev Item</a>
                <a href={`#page${idx === pages.length - 1 ? 0 : idx + 1}`}>Next Item</a>
              </div>
            </li>
          ))}
        </ol>
      </article>
      <div
        css={css`
          ${CSSCarouselHandle};
          pointer-events: none;
        `}
      >
        <Image src={'/icon/magazine/prevPage.svg'} width={48} height={48} />
        <Image src={'/icon/magazine/nextPage.svg'} width={48} height={48} />
      </div>
    </>
  );
};
const CSSCarouselContainer = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: hidden;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`;

const CSSCarouselItem = css`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  counter-increment: item;
  a {
    width: 48px;
    height: 48px;
  }
`;

const CSSPageContent = (theme: Theme) =>
  css`
    word-break: break-all;
    margin-top: 14px;
    ${theme.font.R_BODY_12};
    color: ${theme.color.gray03};
    letter-spacing: 0.005em;
    line-height: 22px;
  `;

const CSSCarouselHandle = css`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0;
`;

const CSSSnapper = css`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`;
export default PageViewContainer;
