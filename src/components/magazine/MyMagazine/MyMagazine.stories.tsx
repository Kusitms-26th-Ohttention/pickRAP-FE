import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import MainMagazine from '@/components/magazine/MyMagazine/MainMagazine';

const MAGAZINE = {
  src: '/picture/mock.png',
  name: '나의 진로 계획',
};

export default {
  title: 'Components/magazine/MyMagazine',
  component: MainMagazine,
  args: {
    magazines: [0, 0, 0, 0].map(() => MAGAZINE),
  },
} as ComponentMeta<typeof MainMagazine>;

export const Default: ComponentStory<typeof MainMagazine> = (args) => <MainMagazine {...args}>Main</MainMagazine>;
