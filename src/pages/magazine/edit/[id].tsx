import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

import { useUpdateMagazine } from '@/application/hooks/api/magazine';
import useToast from '@/application/hooks/common/useToast';
import { useEditPageReset, useEditPageSet } from '@/application/store/edit/hook';
import { useMagazineInfo, useResetMagazineInfo, useSetMagazineInfo } from '@/application/store/magazine/hook';
import SelectCategoryWithContent from '@/components/category/Select/SelectCategoryWithContent';
import { ActiveButton } from '@/components/common/Button';
import MagazineCreateContainer from '@/containers/magazine/MagazineCreateContainer';

/**
 * @todo
 * 수정 페이지 완성
 */
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
        title: '1 페이지',
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
        title: `${idx + 2} 페이지`,
        magazine_id: idx,
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
          <Image src={'/icon/backArrow.svg'} layout={'fill'} objectFit={'cover'} />
        </span>
        <span
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
          <Image src={'/icon/multiSelect.svg'} width={18} height={18} />
        </span>
      </div>
      <MagazineCreateContainer thumbnails={pages} />
      <ActiveButton
        active={!!coverUrl}
        onClick={handleComplete}
        custom={css`
          margin-top: auto;
        `}
      >
        완료
      </ActiveButton>
    </>
  );
};

export default EditMagazine;
