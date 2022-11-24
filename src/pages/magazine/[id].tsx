import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import useModal from '@/application/hooks/common/useModal';
import { PAGES } from '@/application/utils/mock';
import ShowPageNavigation from '@/components/magazine/TopNavigation/ShowPageNavigation';
import PageViewContainer from '@/containers/magazine/PageViewContainer';

const MOCK_DATE = '2022.11.02';
const MOCK_NAME = '나의 패션';

const ShowMagazine: NextPage = () => {
  // TODO useQuery with router.query.id
  const { confirm } = useModal();
  const modalOption = {
    onSuccess: () => {
      // TODO router push /magazine/edit/{page hashtag id}
    },
  };
  return (
    <>
      <ShowPageNavigation name={MOCK_NAME} onEdit={() => confirm('수정 페이지로 이동하시겠어요?', modalOption)} />
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
      <PageViewContainer pages={PAGES} />
    </>
  );
};

export default ShowMagazine;
