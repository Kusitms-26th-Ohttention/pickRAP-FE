import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import MagazineCreateContainer from '@/containers/magazine/MagazineCreateContainer';

export default {
  title: 'containers/magazine',
  component: null,
};

export const MagazineCreate: ComponentStory<typeof MagazineCreateContainer> = (args) => (
  <MagazineCreateContainer {...args}>MagazineCreateContainer</MagazineCreateContainer>
);
