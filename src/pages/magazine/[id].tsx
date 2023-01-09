import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { useGetMagazineDetail } from '@/application/hooks/api/magazine';
import useModal from '@/application/hooks/common/useModal';
import { useSetMagazineInfo } from '@/application/store/magazine/hook';
import ShowPageNavigation from '@/components/magazine/TopNavigation/ShowPageNavigation';
import PageViewContainer from '@/containers/magazine/PageViewContainer';

const ShowMagazine: NextPage = () => {
  const router = useRouter();
  const id = router.query.id ? Number(router.query.id) : 0;
  const { magazine } = useGetMagazineDetail({ id });
  const setMagazineInfo = useSetMagazineInfo();

  const { confirm } = useModal();
  const modalOption = {
    onSuccess: () => {
      setMagazineInfo({
        ...magazine,
        start_number: (magazine?.page_list.length || 0) + 2,
        page_list: magazine?.page_list.map((m) => ({ src: m.file_url, text: m.text, scrap_id: m.page_id })) || [],
      });
      router.push(`/magazine/edit/${id}`);
    },
  };
  return (
    <>
      <ShowPageNavigation
        name={magazine?.title || ''}
        onEdit={() => confirm('수정 페이지로 이동하시겠어요?', modalOption)}
      />
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
          {magazine && `${magazine.created_date[0]}. ${magazine.created_date[1]}. ${magazine.created_date[2]}`}
        </span>
      </div>
      <PageViewContainer pages={magazine?.page_list || []} magazineId={magazine?.magazine_id} />
    </>
  );
};

export default ShowMagazine;
