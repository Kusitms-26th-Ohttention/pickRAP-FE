import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MAGAZINES } from '@/application/utils/mock';
import MainMagazine from '@/components/magazine/MagazineList/MainMagazine';
import TabMagazine from '@/components/magazine/MagazineList/TabMagazine';

export default {
  title: 'Components/magazine/MyMagazine',
  component: TabMagazine,
  args: {
    magazines: MAGAZINES,
    selectItem: true,
  },
} as ComponentMeta<typeof TabMagazine>;

export const Main: ComponentStory<typeof MainMagazine> = (args) => <MainMagazine {...args} />;
export const Tab: ComponentStory<typeof TabMagazine> = (args) => <TabMagazine {...args} />;
