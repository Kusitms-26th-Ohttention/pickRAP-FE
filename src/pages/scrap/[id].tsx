import type { NextPage } from 'next';
import React from 'react';

import { MEMO, PROFILE } from '@/application/utils/mock';
import { ActiveButton } from '@/components/common/Button';
import { Profile } from '@/components/scrap/Content/Content.stories';
import SwipeBackground from '@/components/scrap/Content/SwipeBackground';
import SwipeSection from '@/components/scrap/Content/SwipeSection';

const ShowScrap: NextPage = () => {
  // TODO useQuery with content id (router.query.id)
  return (
    <SwipeSection background={<SwipeBackground src={'/picture/mock.png'} type={'img'} />}>
      <SwipeSection.Able>
        <SwipeSection.Title>강릉 겨울바다 색감</SwipeSection.Title>
        <SwipeSection.Description>{MEMO}</SwipeSection.Description>
      </SwipeSection.Able>
      <SwipeSection.Bottom>
        <SwipeSection.Tag tags={['#블루', '#감성적인', '#겨울바다']} />
        <Profile {...PROFILE} />
        <ActiveButton active>편집하기</ActiveButton>
      </SwipeSection.Bottom>
    </SwipeSection>
  );
};
export default ShowScrap;
