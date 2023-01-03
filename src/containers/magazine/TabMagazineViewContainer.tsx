import { css } from '@emotion/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import { useGetMagazines } from '@/application/hooks/api/magazine';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import type { UseScrollDetectOption } from '@/application/hooks/utils/useScrollDetect';
import { DeletePopup } from '@/components/common/Popup/Sentence';
import Tab from '@/components/common/Tab';
import { TabMagazine } from '@/components/magazine/MagazineList';
import DeleteNavigation from '@/components/scrap/DeleteNavigation';
import { DeleteScrapToast } from '@/components/scrap/Toast';

import { useBottomNavigationContext } from '../HOC/NavigationContext';

interface MagazineTabProps {
  deleteOption?: boolean;
  onScrollDown?: UseScrollDetectOption['onScroll'];
}

// '내 매거진', '저장한 매거진'
const initSelectedContext = { myMagazine: false, saveMagazine: false };
type SelectContext = keyof typeof initSelectedContext;

const MyMagazineWithTab = ({ onScrollDown }: MagazineTabProps) => {
  const { magazines } = useGetMagazines();

  const [selected, setSelected] = useState(initSelectedContext);
  const [deleteOption, isDeleteOption] = useState(false);
  const ref = useRef<SelectContext>('myMagazine');
  const setNavigation = useBottomNavigationContext()[1];
  const { show } = useToast();
  const popup = usePopup();

  // TODO 멀티삭제 삭제 토스트 뜬 후에도 네비게이션 바 그대로인 버그 수정해야함(스크랩, 매거진)
  const handleDeleteMagazine = () => {
    setSelected({ ...selected, [ref.current]: false });
    popup(DeletePopup, 'success');
  };

  const showDeleteMagazineToast = () => show({ content: <DeleteScrapToast onDelete={handleDeleteMagazine} /> });

  const handleMultiSelect = () => {
    isDeleteOption(!deleteOption);
    setSelected((prev) => {
      const ret = { ...prev };
      const deleted = ret[ref.current];
      deleted ? setNavigation('default') : setNavigation(<DeleteNavigation onClick={showDeleteMagazineToast} />);
      ret[ref.current] = !ret[ref.current];
      return ret;
    });
  };

  return (
    <Tab>
      <Tab.Group
        start
        decorator={
          <span
            onClick={handleMultiSelect}
            css={css`
              position: absolute;
              right: 0;
              bottom: 15px;
              font-size: 15px;
            `}
          >
            {selected[ref.current] ? '취소' : <Image src={'/icon/multiSelect.svg'} width={18} height={18} />}
          </span>
        }
      >
        <Tab.Label>내 매거진</Tab.Label>
        <Tab.Label>저장한 매거진</Tab.Label>
      </Tab.Group>
      <Tab.Panel>
        <Tab.Content>
          <TabMagazine
            magazines={magazines}
            onScrollDown={onScrollDown}
            selectItem={selected.myMagazine}
            deleteOption={deleteOption}
          />
        </Tab.Content>
        <Tab.Content>
          <TabMagazine
            magazines={[]}
            onScrollDown={onScrollDown}
            selectItem={selected.saveMagazine}
            deleteOption={deleteOption}
          />
        </Tab.Content>
      </Tab.Panel>
    </Tab>
  );
};

export default MyMagazineWithTab;
