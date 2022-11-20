import type { ComponentStory } from '@storybook/react';
import React from 'react';

import _DeleteScrap from '@/components/scrap/Toast/DeleteScrap';
import _SelectCategory from '@/components/scrap/Toast/SelectCategory';
import _TypedDetailContent from '@/components/scrap/Toast/TypedComplete';
import _TypedDetail from '@/components/scrap/Toast/TypedDetail';

import _CreateScrap from './CreateScrap';

export default {
  title: 'Components/scrap/Toast',
  component: null,
};

export const CreateScrap: ComponentStory<typeof _CreateScrap> = () => <_CreateScrap />;
export const DeleteScrap: ComponentStory<typeof _DeleteScrap> = (args) => <_DeleteScrap {...args} />;
export const TypedTextArea: ComponentStory<typeof _TypedDetail> = (args) => <_TypedDetail {...args} />;
export const TypedInput: ComponentStory<typeof _TypedDetail> = (args) => <_TypedDetail {...args} type="link" />;
export const SelectCategory: ComponentStory<typeof _SelectCategory> = () => <_SelectCategory />;

export const TypedDetailContent: ComponentStory<typeof _TypedDetailContent> = (args) => (
  <_TypedDetailContent {...args} />
);
