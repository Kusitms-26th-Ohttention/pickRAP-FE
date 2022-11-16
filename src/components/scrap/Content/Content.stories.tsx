import type { ComponentStory } from '@storybook/react';
import React from 'react';

import { ActiveButton } from '@/components/common/Button';
import SwipeBackground from '@/components/scrap/Content/SwipeBackground';

import _Profile from './Profile';
import _SwipeSection from './SwipeSection';

export default {
  title: 'Components/scrap/Content',
  component: null,
};

const ProfileArgs = {
  src: '/picture/mock.png',
  name: '박지수',
  date: '2022.11.17',
};

export const Profile: ComponentStory<typeof _Profile> = (args) => <_Profile {...args} />;
Profile.args = ProfileArgs;

const DESCRIPTION =
  '겨울에는 진짜 강릉 겨울바다 한번씩 가줘야한다고 생각해요. 겨울에도 영롱한 블루계열이 너무 맘에 드네요. 겨울에는 진짜 강릉 겨울바다 한번씩 가줘야한다고 생각해요. 겨울에도 영롱한 블루계열이 너무 맘에 드네요. 겨울에는 진짜 강릉 겨울바다 한번씩 가줘야한다고 생각해요. 겨울에도 영롱한 블루계열이 너무 맘에 드네요. 겨울에는 진짜 강릉 겨울바다 한번씩 가줘야한다고 생각해요. ';

export const SwipeSectionImg: ComponentStory<typeof _SwipeSection> = (args) => (
  <_SwipeSection {...args} background={<SwipeBackground src={'/picture/mock.png'} type={'img'} />}>
    <_SwipeSection.Able>
      <_SwipeSection.Title>강릉 겨울바다 색감</_SwipeSection.Title>
      <_SwipeSection.Description>{DESCRIPTION}</_SwipeSection.Description>
    </_SwipeSection.Able>
    <_SwipeSection.Bottom>
      <_SwipeSection.Tag tags={['#블루', '#감성적인', '#겨울바다']} />
      <Profile {...ProfileArgs} />
      <ActiveButton active>편집하기</ActiveButton>
    </_SwipeSection.Bottom>
  </_SwipeSection>
);

const MEMO = `사람에게는 저마다의 바다가  있고 사람에게는 저마다의 파도가 있기 마련이지. 우리는 한낱 사람이라서 일렁였고 고작 사람이기 때문에 글썽일 수밖에는 없었던 거야. 우리는 서로 모든 이들에게 타인이기 때문에 내리는 비에 옷깃을 젖어야 했으며 그마저도 사람이기 때문에 그 빗속을 외로이 걸을 수 밖에 없었던 거야.

 무릇, 모든 별들도 시간의 흐름에 따라 조금씩 변해가기 마련이거늘, 하물며 시간의 연장선에서 사람이라는 존재가 할 수 있는 일은 기껏 해봐야 남들처럼 사는 일이거나 남들처럼 살지 않는 일에 지나지 않아.`;

export const SwipeSectionMemo: ComponentStory<typeof _SwipeSection> = (args) => (
  <_SwipeSection {...args} background={<SwipeBackground text={MEMO} type={'memo'} />}>
    <_SwipeSection.Able>
      <_SwipeSection.Title>강릉 겨울바다 색감</_SwipeSection.Title>
      <_SwipeSection.Description>{DESCRIPTION}</_SwipeSection.Description>
    </_SwipeSection.Able>
    <_SwipeSection.Bottom>
      <_SwipeSection.Tag tags={['#블루', '#감성적인', '#겨울바다']} />
      <Profile {...ProfileArgs} />
      <ActiveButton active>편집하기</ActiveButton>
    </_SwipeSection.Bottom>
  </_SwipeSection>
);
