import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Switch from '.';

export default {
  title: 'Components/common/Switch',
  component: Switch,
  args: {
    defaultChecked: true,
  },
  argTypes: {
    defaultChecked: {
      name: 'defaultChecked',
      type: { name: 'boolean', required: false },
    },
  },
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = (args) => <Switch {...args}>Switch</Switch>;
