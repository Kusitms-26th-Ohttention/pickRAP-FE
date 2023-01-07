import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getValidURL } from '@/application/utils/helper';
import { PAGES, PROFILE } from '@/application/utils/mock';
import Photo from '@/components/common/Photo';
import MagazinePageProfile from '@/components/magazine/MagazinePageProfile';

interface Props {
  pages: Page[];
}

const PageViewContainer = ({ pages = PAGES }: Props) => {
  return (
    <>
      <article
        css={css`
          position: relative;
          height: 100%;
        `}
      >
        {pages.length === 0 ? (
          <MagazinePageProfile {...PROFILE} />
        ) : (
          <ol css={CSSCarouselContainer}>
            {pages.map((page, idx) => (
              <li key={page.page_id} id={`${idx}`} css={CSSCarouselItem}>
                {idx === 0 ? (
                  <MagazinePageProfile {...PROFILE} />
                ) : (
                  <>
                    {' '}
                    <Photo
                      src={page.file_url || getValidURL(page.contents).toString()}
                      text={page.contents}
                      height={'45vh'}
                    />
                    <p css={CSSPageContent}>{page.text}</p>
                  </>
                )}
                <div css={CSSSnapper} />
                <div css={CSSCarouselHandle}>
                  <Link href={{ hash: `#${idx === 0 ? pages.length - 1 : idx - 1}` }}>Prev Item</Link>
                  <Link href={{ hash: `#${idx === pages.length - 1 ? 0 : idx + 1}` }}>Next Item</Link>
                </div>
              </li>
            ))}
          </ol>
        )}
      </article>
      <div
        css={css`
          ${CSSCarouselHandle};
          pointer-events: none;
        `}
      >
        <Image src={'/icon/magazine/prevPage.svg'} width={48} height={48} alt="prevPageBtn" />
        <Image src={'/icon/magazine/nextPage.svg'} width={48} height={48} alt="nextPageBtn" />
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
  margin-right: 32px;

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
  gap: 12px;
  display: flex;
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
