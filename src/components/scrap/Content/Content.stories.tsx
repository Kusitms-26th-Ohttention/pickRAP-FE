import type { ComponentStory } from '@storybook/react';
import React from 'react';

import { ActiveButton } from '@/components/common/Button';

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
export const SwipeSection: ComponentStory<typeof _SwipeSection> = (args) => (
  <_SwipeSection {...args}>
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
