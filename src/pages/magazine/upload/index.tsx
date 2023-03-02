import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { useSaveMagazine } from '@/application/hooks/api/magazine';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import { useEditPageReset, useEditPageSet } from '@/application/store/edit/hook';
import {
  useMagazineInfo,
  usePageDeleteList,
  useResetMagazineInfo,
  useSetMagazineInfo,
  useSetPageDeleteList,
} from '@/application/store/magazine/hook';
import SelectCategoryWithContent from '@/components/category/Select/SelectCategoryWithContent';
import { ActiveButton } from '@/components/common/Button';
import { MagazineWarningPopup } from '@/components/common/Popup/MagazineWarningSentence';
import { DeletePopup } from '@/components/common/Popup/Sentence';
import DeleteNavigation from '@/components/scrap/DeleteNavigation';
import { DeleteScrapToast } from '@/components/scrap/Toast';
import MagazineCreateContainer from '@/containers/magazine/MagazineCreateContainer';

/**
 * @todo
 * 토스트에 대한 고찰..
 * 간단한 메세지(성공, 오류, 경고)는 hook 함수로 호출하는 것이 좋지만
 * 복잡한 UI 띄우는 작업은 일반적인 리액트 컴포넌트로 표현해야 할 듯 보임
 *
 * 문제점 1. 토스트 내용 컴포넌트 간의 강한 결합
 * 문제점 2. 복잡한 함수 호출 구조
 *
 * 리팩토링 필요
 */
const UploadMagazine: NextPage = () => {
  const router = useRouter();
  const { show, close } = useToast();
  const popup = usePopup();
  const [selected, setSelected] = useState(false);
  const pageDeleteList = usePageDeleteList();
  const setPageDeleteList = useSetPageDeleteList();

  const magazineInfo = useMagazineInfo();
  const setMagazineInfo = useSetMagazineInfo();
  const [_, setEditPage] = useEditPageSet();

  const mutation = useSaveMagazine();
  const resetMagazineInfo = useResetMagazineInfo();
  const resetEditPage = useEditPageReset();

  const handleClickReset = () => {
    setSelected(false);
  };

  const handleDeletePages = () => {
    setMagazineInfo((prev) => ({
      ...prev,
      page_list: prev.page_list?.filter((page) => !pageDeleteList.includes(page.scrap_id)),
    }));
    setSelected(false);
    setPageDeleteList([]);
    popup(DeletePopup, 'success');
  };

  const handleMultiSelect = () => {
    setSelected(!selected);
  };

  const showDeletePagesToast = () =>
    show({
      content: <DeleteScrapToast onBack={close} onDelete={handleDeletePages} />,
    });

  const handleBack = () => {
    router.replace('/magazine').then(() => {
      resetMagazineInfo();
      resetEditPage();
    });
  };

  const handleComplete = () => {
    if (magazineInfo.cover_scrap_id === 0) {
      popup(MagazineWarningPopup, 'warn');
    } else {
      mutation.mutate(magazineInfo, {
        onSuccess: handleBack,
      });
    }
  };

  const pages = (() => {
    const ret: (MagazineThumbnail & { onClick?: () => void })[] = [
      {
        cover_url: magazineInfo.cover_scrap_src,
        scrap_id: magazineInfo.cover_scrap_id,
        placeholder: magazineInfo.cover_scrap_placeholder,
        title: '표지 설정',
        magazine_id: 0,
        onClick: () =>
          show({
            content: (
              <SelectCategoryWithContent
                onSubmit={(pages) => {
                  setMagazineInfo({
                    cover_scrap_id: pages.scrap_id,
                    cover_scrap_src: pages.src,
                    cover_scrap_placeholder: pages.placeholder,
                  });
                  close();
                }}
              />
            ),
          }),
      },
      ...magazineInfo.page_list.map((page, idx) => ({
        cover_url: page.src,
        scrap_id: page.scrap_id,
        placeholder: page.placeholder,
        title: `${idx + 1} 페이지`,
        magazine_id: idx,
        onClick: () => {
          if (!selected) return;
          const id = page.scrap_id;
          setPageDeleteList((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : prev.concat(id)));
        },
      })),
    ];

    ret.push({
      cover_url: '/icon/magazine/addPage.svg',
      title: '페이지 추가',
      magazine_id: 0,
      onClick: () =>
        show({
          content: (
            <SelectCategoryWithContent
              multiSelect
              onSubmit={(pages) => {
                setEditPage(pages);
                router.push('/magazine/upload/page').then(close);
              }}
            />
          ),
        }),
    });

    return ret;
  })();

  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          width: 100%;
          gap: 10px;
          height: 28px;
          margin-bottom: 4px;
          align-items: center;
        `}
      >
        <span
          onClick={handleBack}
          css={css`
            width: 10px;
            height: 17px;
            position: absolute;
            z-index: 1;
            left: 0;
          `}
        >
          <Image src={'/icon/backArrow.svg'} layout={'fill'} objectFit={'cover'} alt="뒤로가기" />
        </span>
        <span
          onClick={handleMultiSelect}
          css={(theme) =>
            css`
              ${theme.font.R_BODY_15};
              min-width: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            `
          }
        >
          {selected ? (
            <p onClick={handleClickReset}>취소</p>
          ) : (
            <Image src={'/icon/multiSelect.svg'} width={18} height={18} alt="삭제" />
          )}
        </span>
      </div>
      <MagazineCreateContainer thumbnails={pages} selectItem={selected} />
      {selected ? (
        <DeleteNavigation onClick={showDeletePagesToast} />
      ) : (
        <ActiveButton
          active={!!magazineInfo.cover_scrap_id}
          onClick={handleComplete}
          custom={css`
            margin-top: auto;
          `}
        >
          완료
        </ActiveButton>
      )}
    </>
  );
};

export default UploadMagazine;
