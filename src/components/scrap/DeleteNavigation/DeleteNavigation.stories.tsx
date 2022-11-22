import type { ComponentStory } from '@storybook/react';
import React from 'react';

import _DeleteBottomNavigation from '@/components/scrap/DeleteNavigation/index';

export default {
  title: 'Components/scrap/Navigation',
  component: null,
};

export const DeleteBottomNavigation: ComponentStory<typeof _DeleteBottomNavigation> = (args) => (
  <_DeleteBottomNavigation {...args} />
);
