import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import _PageList from '.';

export default {
  title: 'Components/magazine/PageList',
  component: _PageList,
  args: {
    pages: [
      {
        src: '/picture/mock.png',
        name: '홍길동',
      },
      {
        src: '/picture/mock.png',
        name: '홍길동',
      },
      {
        src: '/picture/mock.png',
        name: '홍길동',
      },
      {
        src: '/picture/mock.png',
        name: '홍길동',
      },
    ],
  },
} as ComponentMeta<typeof _PageList>;

export const PageList: ComponentStory<typeof _PageList> = (args) => <_PageList {...args}>_PageList</_PageList>;
