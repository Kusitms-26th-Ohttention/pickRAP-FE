import type { ComponentStory } from '@storybook/react';
import React from 'react';

import MagazineCreateContainer from '@/containers/magazine/MagazineCreateContainer';
import PageViewContainer from '@/containers/magazine/PageViewContainer';

export default {
  title: 'containers/magazine',
  component: null,
};

export const MagazineCreate: ComponentStory<typeof MagazineCreateContainer> = (args) => (
  <MagazineCreateContainer {...args}>MagazineCreateContainer</MagazineCreateContainer>
);
export const PageView: ComponentStory<typeof PageViewContainer> = (args) => <PageViewContainer {...args} />;
