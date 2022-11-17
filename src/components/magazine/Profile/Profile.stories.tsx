import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Profile from '.';

export default {
  title: 'Components/magazine/Profile',
  component: Profile,
  args: {
    src: '/picture/mock.png',
    name: '홍길동',
    description: '진정한 나의 모습을 담은 나만의 바이블',
    hashtags: ['#포폴용도', '#자료모음', '#패션피플'],
  },
} as ComponentMeta<typeof Profile>;

export const Default: ComponentStory<typeof Profile> = (args) => <Profile {...args}>Profile</Profile>;
