import type { ComponentStory } from '@storybook/react';
import React from 'react';

import _DeleteScrap from '@/components/scrap/Toast/DeleteScrap';
import _SelectCategory from '@/components/scrap/Toast/SelectCategory';
import _TypedDetail from '@/components/scrap/Toast/TypedDetail';
import _TypedDetailContent from '@/components/scrap/Toast/TypedDetailContent';

import _CreateScrap from './CreateScrap';

export default {
  title: 'Components/scrap/Toast',
  component: null,
};

export const CreateScrap: ComponentStory<typeof _CreateScrap> = (args) => <_CreateScrap {...args} />;
export const DeleteScrap: ComponentStory<typeof _DeleteScrap> = (args) => <_DeleteScrap {...args} />;
export const TypedTextArea: ComponentStory<typeof _TypedDetail> = (args) => <_TypedDetail {...args} />;
export const TypedInput: ComponentStory<typeof _TypedDetail> = (args) => <_TypedDetail {...args} type="input" />;
export const SelectCategory: ComponentStory<typeof _SelectCategory> = (args) => <_SelectCategory {...args} />;
SelectCategory.args = {
  categories: [
    { src: '/picture/mock.png', name: '독서' },
    { src: '/picture/question.png', name: '여행' },
  ],
};

export const TypedDetailContent: ComponentStory<typeof _TypedDetailContent> = (args) => (
  <_TypedDetailContent {...args} />
);
