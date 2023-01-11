import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

import { useUpdateMagazine } from '@/application/hooks/api/magazine';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import { useEditPageReset, useEditPageSet } from '@/application/store/edit/hook';
import {
  useMagazineInfo,
  usePageDeleteList,
  useResetMagazineInfo,
  useSetMagazineInfo,
} from '@/application/store/magazine/hook';
import SelectCategoryWithContent from '@/components/category/Select/SelectCategoryWithContent';
import { ActiveButton } from '@/components/common/Button';
import { DeletePopup } from '@/components/common/Popup/Sentence';
import DeleteNavigation from '@/components/scrap/DeleteNavigation';
import { DeleteScrapToast } from '@/components/scrap/Toast';
import MagazineCreateContainer from '@/containers/magazine/MagazineCreateContainer';

const EditMagazine: NextPage = () => {
  const router = useRouter();
  const id = router.query.id ? Number(router.query.id) : 0;
  const { show, close } = useToast();
  const setMagazineInfo = useSetMagazineInfo();
  const [coverUrl, setCoverUrl] = useState('');
  const magazineInfo = useMagazineInfo();
  const [_, setEditPage] = useEditPageSet();
  const mutation = useUpdateMagazine();
  const resetMagazineInfo = useResetMagazineInfo();
  const resetEditPage = useEditPageReset();

  const pageDeleteItem = usePageDeleteList();
  console.log(pageDeleteItem);

  // 스크랩, 매거진 페이지같이 옵션선택이 없으므로 바로 boolean 설정
  const [selected, setSelected] = useState(false);
  const popup = usePopup();

  const handleDeletePages = () => {
    setSelected(false);
    popup(DeletePopup, 'success');
  };

  const showDeletePagesToast = () => show({ content: <DeleteScrapToast onDelete={handleDeletePages} /> });

  const handleMultiSelect = () => {
    setSelected(!selected);
  };

  const handleBack = () => {
    router.replace(`/magazine/${id}`).then(() => {
      resetMagazineInfo();
      resetEditPage();
    });
  };

  const handleComplete = () => {
    mutation.mutate(
      { ...magazineInfo, id },
      {
        onSuccess: handleBack,
      },
    );
    console.debug('complete :::', magazineInfo);
  };

  const pages = useMemo(() => {
    const ret: (MagazineThumbnail & { onClick?: () => void })[] = [
      {
        cover_url: coverUrl,
        title: '표지 변경',
        magazine_id: 0,
        onClick: () =>
          show({
            content: (
              <SelectCategoryWithContent
                onSubmit={(pages) => {
                  setCoverUrl(pages.src);
                  setMagazineInfo({ cover_scrap_id: pages.scrap_id });
                  close();
                }}
              />
            ),
          }),
      },
      ...magazineInfo.page_list.map((page, idx) => ({
        cover_url: page.src,
        title: `${idx + 1} 페이지`,
        magazine_id: idx,
        scrap_id: page.scrap_id,
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
  }, [close, coverUrl, magazineInfo.page_list, router, setEditPage, setMagazineInfo, show]);

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
          {selected ? '취소' : <Image src={'/icon/multiSelect.svg'} width={18} height={18} alt="삭제아이콘" />}
        </span>
      </div>
      <MagazineCreateContainer thumbnails={pages} selectItem={selected} />
      {selected === true ? (
        <DeleteNavigation onClick={showDeletePagesToast} />
      ) : (
        <ActiveButton
          active={!!coverUrl}
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
export default EditMagazine;
