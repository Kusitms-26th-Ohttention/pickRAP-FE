import type { ComponentStory } from '@storybook/react';
import React from 'react';

import _CreateCategory from '@/components/category/Modal/CreateCategory';

export default {
  title: 'Components/scrap/Popup',
  component: null,
};

export const CreateCategory: ComponentStory<typeof _CreateCategory> = (args) => (
  <>
    <_CreateCategory {...args} />
    <_CreateCategory {...args} />
  </>
);
