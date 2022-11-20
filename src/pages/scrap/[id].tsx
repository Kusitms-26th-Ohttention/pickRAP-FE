import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { useGetScrapById, useUpdateScrap } from '@/application/hooks/api/scrap';
import useToast from '@/application/hooks/common/useToast';
import useScrapForm from '@/application/store/scrap/useScrapForm';
import { PROFILE } from '@/application/utils/mock';
import { ActiveButton } from '@/components/common/Button';
import { Profile } from '@/components/scrap/Content/Content.stories';
import SwipeBackground from '@/components/scrap/Content/SwipeBackground';
import SwipeSection from '@/components/scrap/Content/SwipeSection';
import { TypedCompleteToast } from '@/components/scrap/Toast';

const ShowScrap: NextPage = () => {
  const { show } = useToast();
  const router = useRouter();

  const id = Number(router.query.id);
  const mutation = useUpdateScrap(id);
  const { scrap } = useGetScrapById({ id });

  const { setRequest } = useScrapForm();
  useEffect(() => {
    setRequest(mutation.mutate);
  }, [mutation.mutate, setRequest]);

  const scrapType = scrap?.scrap_type.toLowerCase() as 'image' | 'text' | 'link';

  const swipeBackgroundProps =
    scrapType === 'text'
      ? { text: scrap?.content, type: scrapType }
      : scrapType === 'image'
      ? { src: scrap?.file_url, type: scrapType }
      : { src: scrap?.url_preview, type: scrapType };

  return (
    <>
      <span
        onClick={() => router.back()}
        css={css`
          position: fixed;
          padding-top: 8px;
          z-index: 1;
        `}
      >
        <Image src={'/icon/borderBackArrow.svg'} width={35} height={34} />
      </span>
      <SwipeSection background={<SwipeBackground {...swipeBackgroundProps} />}>
        <SwipeSection.Able>
          <SwipeSection.Title>{scrap?.title}</SwipeSection.Title>
          <SwipeSection.Description>{scrap?.memo}</SwipeSection.Description>
        </SwipeSection.Able>
        <SwipeSection.Bottom>
          <SwipeSection.Tag tags={scrap?.hashtags || []} />
          <Profile {...PROFILE} />
          <ActiveButton active onClick={() => show({ content: <TypedCompleteToast placeholder={'완료 하기'} /> })}>
            편집하기
          </ActiveButton>
        </SwipeSection.Bottom>
      </SwipeSection>
    </>
  );
};
export default ShowScrap;
