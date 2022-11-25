import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import useToast from '@/application/hooks/common/useToast';
import { useEditPageSet, useEditPageValue } from '@/application/store/edit/hook';
import Photo from '@/components/common/Photo';
import ToastInput from '@/components/common/Toast/ui/Input';

interface Props {
  pages: EditPage[];
  startPage: number;
}

/**
 * 버그
 *  1. 페이지 추가 시 표지 페이지가 덮어 씌워진다
 *  2. 이전에 추가 했던 페이지도 덮어 씌워진다
 *
 * 추가 구현 사항
 *  1. 네비게이션 뒤로가기 클릭 시 현재 페이지의 수정 사항을 버린다
 *    - 다중 선택 시 페이지 1개만 버리기 까다로우므로 일단 다 버린다
 */
const PageEditContainer = ({ pages, startPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const { show, close } = useToast();

  const [setEditPage] = useEditPageSet();
  const editPageInfo = useEditPageValue();

  const getPrevPage = (num: number) => (num > 0 ? num - 1 : num);
  const getNextPage = (num: number) => (num < pages.length - 1 ? num + 1 : num);

  const toastProps = {
    onSubmit: (value: string) => {
      setEditPage(currentPage, { text: value });
      close();
    },
    label: '텍스트 입력',
    submit: '완료',
    type: 'textarea' as const,
    title: '텍스트 입력하기',
  };
  return (
    <>
      <span
        css={(theme) =>
          css`
            ${theme.font.R_BODY_12};
            color: ${theme.color.gray05};
            line-height: 26px;
            letter-spacing: 0.005em;
            margin-left: auto;
            margin-bottom: 2px;
          `
        }
      >
        {currentPage + startPage} 페이지
      </span>
      <article
        css={css`
          position: relative;
          flex: 1 1 auto;
        `}
      >
        <ol css={CSSCarouselContainer}>
          {pages.map((page, idx) => (
            <li key={page.scrap_id} id={`${idx + startPage}`} css={CSSCarouselItem}>
              <div
                css={css`
                  width: 100%;
                  border: 2px solid #dbdbdb;
                  border-radius: 4px;
                  padding: min(40px, 4.8vh);
                `}
              >
                <Photo src={page.src} placeholder={page.placeholder} height={'33vh'} />
                <p
                  css={CSSPageContent}
                  onClick={() =>
                    show({
                      content: <ToastInput {...toastProps} />,
                    })
                  }
                >
                  {editPageInfo[idx].text || '클릭하여 텍스트를 남겨보세요.'}
                </p>
              </div>
            </li>
          ))}
        </ol>
        {pages.length > 1 && (
          <div
            css={css`
              position: absolute;
              bottom: 16px;
              right: 0;
              gap: 12px;
              display: flex;
            `}
          >
            <Link href={{ hash: `${getPrevPage(currentPage) + startPage}` }}>
              <Image
                onClick={() => setCurrentPage(getPrevPage(currentPage))}
                src={'/icon/magazine/prevPage.svg'}
                width={48}
                height={48}
              />
            </Link>
            <Link href={{ hash: `${getNextPage(currentPage) + startPage}` }}>
              <Image
                onClick={() => setCurrentPage(getNextPage(currentPage))}
                src={'/icon/magazine/nextPage.svg'}
                width={48}
                height={48}
              />
            </Link>
          </div>
        )}
      </article>
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
  overflow-x: auto;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`;

const CSSCarouselItem = css`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  margin-right: min(40px, 5vh);
  display: flex;
  flex-direction: column;

  counter-increment: item;
`;

const CSSPageContent = (theme: Theme) =>
  css`
    word-break: break-all;
    margin-top: 24px;
    ${theme.font.R_BODY_13};
    color: ${theme.color.gray04};
    letter-spacing: 0.005em;
    line-height: 20px;
    height: 18.7vh;

    align-items: center;
    justify-content: center;
    width: 100%;
    display: flex;

    border: 2px dashed ${theme.color.gray07};
    border-radius: 4px;
  `;

export default PageEditContainer;
