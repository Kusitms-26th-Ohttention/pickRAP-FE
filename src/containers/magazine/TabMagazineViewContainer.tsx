import { css } from '@emotion/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { useDeleteMagazines, useGetMagazines } from '@/application/hooks/api/magazine';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import type { UseScrollDetectOption } from '@/application/hooks/utils/useScrollDetect';
import { useMagazineDeleteList } from '@/application/store/magazine/hook';
import { deleteOption, magazineIdsArray } from '@/application/store/magazine/state';
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
  const [option, isOption] = useRecoilState(deleteOption);
  const [, setMagazineItems] = useRecoilState(magazineIdsArray);
  const magazineDeleteList = useMagazineDeleteList();
  const ref = useRef<SelectContext>('myMagazine');
  const setNavigation = useBottomNavigationContext()[1];
  const { show } = useToast();
  const popup = usePopup();

  const handleDeleteMagazine = () => {
    handleDeleteIds();
    resetMagazineStates();
    setSelected({ ...selected, [ref.current]: false });
    popup(DeletePopup, 'success');
  };

  const showDeleteMagazineToast = () => show({ content: <DeleteScrapToast onDelete={handleDeleteMagazine} /> });

  const handleMultiSelect = () => {
    isOption(!option);
    setSelected((prev) => {
      const ret = { ...prev };
      const deleted = ret[ref.current];
      deleted ? setNavigation('default') : setNavigation(<DeleteNavigation onClick={showDeleteMagazineToast} />);
      ret[ref.current] = !ret[ref.current];
      return ret;
    });
  };

  // 매거진 삭제
  const mutation = useDeleteMagazines();
  const handleDeleteIds = () => {
    mutation.mutate({ ids: magazineDeleteList });
  };

  const resetMagazineStates = () => {
    isOption(false);
    setMagazineItems([]);
    setNavigation('default');
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
            {selected[ref.current] ? (
              <p onClick={() => setMagazineItems([])}>취소</p>
            ) : (
              <Image src={'/icon/multiSelect.svg'} width={18} height={18} alt="삭제아이콘" />
            )}
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
            option={option}
          />
        </Tab.Content>
        <Tab.Content>
          <TabMagazine magazines={[]} onScrollDown={onScrollDown} selectItem={selected.saveMagazine} option={option} />
        </Tab.Content>
      </Tab.Panel>
    </Tab>
  );
};

export default MyMagazineWithTab;
