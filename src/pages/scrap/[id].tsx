import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import useToast from '@/application/hooks/useToast';
import { MEMO, PROFILE } from '@/application/utils/mock';
import { ActiveButton } from '@/components/common/Button';
import { Profile } from '@/components/scrap/Content/Content.stories';
import SwipeBackground from '@/components/scrap/Content/SwipeBackground';
import SwipeSection from '@/components/scrap/Content/SwipeSection';
import { TypedDetailContentToast } from '@/components/scrap/Toast';

const ShowScrap: NextPage = () => {
  const { show } = useToast();
  const router = useRouter();
  // TODO useQuery with content id (router.query.id)
  // TODO useMutation for modify
  return (
    <>
      <span
        onClick={() => router.back()}
        css={css`
          position: fixed;
          z-index: 1;
        `}
      >
        <Image src={'/icon/borderBackArrow.svg'} width={35} height={34} />
      </span>
      <SwipeSection background={<SwipeBackground src={'/picture/mock.png'} type={'img'} />}>
        <SwipeSection.Able>
          <SwipeSection.Title>강릉 겨울바다 색감</SwipeSection.Title>
          <SwipeSection.Description>{MEMO}</SwipeSection.Description>
        </SwipeSection.Able>
        <SwipeSection.Bottom>
          <SwipeSection.Tag tags={['#블루', '#감성적인', '#겨울바다']} />
          <Profile {...PROFILE} />
          {/* TODO 수정을 위한 토스트 컴포넌트 제작 */}
          <ActiveButton active onClick={() => show({ content: <TypedDetailContentToast placeholder={'완료 하기'} /> })}>
            편집하기
          </ActiveButton>
        </SwipeSection.Bottom>
      </SwipeSection>
    </>
  );
};
export default ShowScrap;
