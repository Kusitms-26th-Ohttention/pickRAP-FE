import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Select from '@/components/common/Select/index';

export default {
  title: 'Components/common/Select',
  component: Select,
  args: {
    value: '사진',
  },
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <Select.Trigger />
    <Select.OptionList>
      <Select.Option value={'사진'} />
      <Select.Option value={'비디오'} />
      <Select.Option value={'파일'} />
    </Select.OptionList>
  </Select>
);
