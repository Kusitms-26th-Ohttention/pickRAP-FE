import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Tab from '.';

export default {
  title: 'Components/magazine/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

export const Default: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;
