import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ShowPageNavigation from '@/components/magazine/TopNavigation/ShowPageNavigation';

export default {
  title: 'Components/magazine/TopNavigation',
  component: ShowPageNavigation,
  args: {
    name: '나의 패션',
  },
} as ComponentMeta<typeof ShowPageNavigation>;

export const Default: ComponentStory<typeof ShowPageNavigation> = (args) => <ShowPageNavigation {...args} />;
