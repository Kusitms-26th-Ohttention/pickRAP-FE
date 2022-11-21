import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

import type { UseScrollDetectOption } from '@/application/hooks/utils/useScrollDetect';
import { MAGAZINES } from '@/application/utils/mock';
import Tab from '@/components/common/Tab';
import { TabMagazine } from '@/components/magazine/MagazineList';

interface MagazineTabProps {
  onMultiSelect?: () => void;
  onScrollDown?: UseScrollDetectOption['onScroll'];
}
const MyMagazineWithTab = ({ onMultiSelect, onScrollDown }: MagazineTabProps) => {
  return (
    <Tab>
      <Tab.Group
        start
        decorator={
          <span
            onClick={onMultiSelect}
            css={css`
              position: absolute;
              right: 0;
              bottom: 15px;
            `}
          >
            <Image src={'/icon/multiSelect.svg'} width={18} height={18} />
          </span>
        }
      >
        <Tab.Label>내 매거진</Tab.Label>
        <Tab.Label>저장한 매거진</Tab.Label>
      </Tab.Group>
      <Tab.Panel>
        <Tab.Content>
          <TabMagazine magazines={MAGAZINES} onScrollDown={onScrollDown} />
        </Tab.Content>
        <Tab.Content>
          <TabMagazine magazines={MAGAZINES} onScrollDown={onScrollDown} />
        </Tab.Content>
      </Tab.Panel>
    </Tab>
  );
};

export default MyMagazineWithTab;
