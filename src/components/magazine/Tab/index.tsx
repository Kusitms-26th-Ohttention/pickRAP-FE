import { css } from '@emotion/react';
import Image from 'next/image';
import type { ReactElement } from 'react';
import React from 'react';

import Tab from '@/components/common/Tab';

interface MagazineTabProps {
  myMagazine: ReactElement;
  savedMagazine: ReactElement;
  onMultiSelect?: () => void;
}
// TODO 스크롤 컴포넌트 내부에서 바로 삽입
const MagazineTab = ({ myMagazine, savedMagazine, onMultiSelect }: MagazineTabProps) => {
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
            <Image src={'/icon/magazine/multiSelect.svg'} width={18} height={18} />
          </span>
        }
      >
        <Tab.Label>내 매거진</Tab.Label>
        <Tab.Label>저장한 매거진</Tab.Label>
      </Tab.Group>
      <Tab.Panel>
        <Tab.Content>{myMagazine}</Tab.Content>
        <Tab.Content>{savedMagazine}</Tab.Content>
      </Tab.Panel>
    </Tab>
  );
};

export default MagazineTab;
