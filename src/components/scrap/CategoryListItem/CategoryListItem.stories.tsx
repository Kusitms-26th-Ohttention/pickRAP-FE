import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import CategoryListItem from '@/components/scrap/CategoryListItem/index';

export default {
  title: 'Components/scrap/CategoryListItem',
  component: CategoryListItem,
  args: {
    src: '/picture/mock.png',
    title: '내가 가장 좋아하는 것',
  },
} as ComponentMeta<typeof CategoryListItem>;

export const Default: ComponentStory<typeof CategoryListItem> = (args) => (
  <>
    <CategoryListItem {...args} select></CategoryListItem>
    <CategoryListItem {...args}></CategoryListItem>
  </>
);
