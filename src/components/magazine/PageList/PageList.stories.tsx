import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MAGAZINES } from '@/application/utils/mock';

import _PageList from '.';

export default {
  title: 'Components/magazine/PageList',
  component: _PageList,
  args: {
    pages: MAGAZINES,
  },
} as ComponentMeta<typeof _PageList>;

export const PageList: ComponentStory<typeof _PageList> = (args) => <_PageList {...args}>_PageList</_PageList>;
