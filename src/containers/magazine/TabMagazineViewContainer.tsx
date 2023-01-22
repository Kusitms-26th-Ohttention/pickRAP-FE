import { css } from '@emotion/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { useDeleteMagazines, useGetMagazines } from '@/application/hooks/api/magazine';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import type { UseScrollDetectOption } from '@/application/hooks/utils/useScrollDetect';
import { useMagazineDeleteList, useResetMagazineDeleteList } from '@/application/store/magazine/hook';
import { multiDelete } from '@/application/store/magazine/state';
import { BottomNavigation } from '@/components/common/Navigation';
import { DeletePopup } from '@/components/common/Popup/Sentence';
import Tab from '@/components/common/Tab';
import { TabMagazine } from '@/components/magazine/MagazineList';
import DeleteNavigation from '@/components/scrap/DeleteNavigation';
import { DeleteScrapToast } from '@/components/scrap/Toast';

interface MagazineTabProps {
  onScrollDown?: UseScrollDetectOption['onScroll'];
}

// '내 매거진', '저장한 매거진'
const initSelectedContext = { myMagazine: false, saveMagazine: false };
type SelectContext = keyof typeof initSelectedContext;

const MyMagazineWithTab = ({ onScrollDown }: MagazineTabProps) => {
  const { magazines } = useGetMagazines();

  const [selected, setSelected] = useState(initSelectedContext);
  const [selectDeleteBtn, isSelectDeleteBtn] = useRecoilState(multiDelete);
  const magazineDeleteList = useMagazineDeleteList();
  const resetMagazineList = useResetMagazineDeleteList();
  const ref = useRef<SelectContext>('myMagazine');
  const { show } = useToast();
  const popup = usePopup();

  const mutation = useDeleteMagazines();

  const handleDeleteMagazine = () => {
    mutation.mutate({ ids: magazineDeleteList }, { onSuccess: resetMagazineList });
    setSelected({ ...selected, [ref.current]: false });
    popup(DeletePopup, 'success');
  };

  const handleTabClick = (key: SelectContext) => {
    ref.current = key;
  };

  const showDeleteMagazineToast = () => show({ content: <DeleteScrapToast onDelete={handleDeleteMagazine} /> });

  const handleMultiSelect = () => {
    isSelectDeleteBtn(!selectDeleteBtn);
    setSelected((prev) => {
      const ret = { ...prev };
      ret[ref.current] = !ret[ref.current];
      return ret;
    });
  };

  return (
    <>
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
                <p onClick={resetMagazineList}>취소</p>
              ) : (
                <Image src={'/icon/multiSelect.svg'} width={18} height={18} alt="삭제아이콘" />
              )}
            </span>
          }
        >
          <Tab.Label onClick={() => handleTabClick('myMagazine')}>내 매거진</Tab.Label>
          <Tab.Label onClick={() => handleTabClick('saveMagazine')}>저장한 매거진</Tab.Label>
        </Tab.Group>
        <Tab.Panel>
          <Tab.Content>
            <TabMagazine
              magazines={magazines}
              onScrollDown={onScrollDown}
              selectItem={selected.myMagazine}
              selectDeleteBtn={selectDeleteBtn}
            />
          </Tab.Content>
          <Tab.Content>
            <TabMagazine
              magazines={[]}
              onScrollDown={onScrollDown}
              selectItem={selected.saveMagazine}
              selectDeleteBtn={selectDeleteBtn}
            />
          </Tab.Content>
        </Tab.Panel>
      </Tab>
      {selected[ref.current] ? <DeleteNavigation onClick={showDeleteMagazineToast} /> : <BottomNavigation />}
    </>
  );
};

export default MyMagazineWithTab;
