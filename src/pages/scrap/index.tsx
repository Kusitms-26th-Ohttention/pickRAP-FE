import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import usePopup from '@/application/hooks/usePopup';
import useToast from '@/application/hooks/useToast';
import Search from '@/components/common/Search';
import Tab from '@/components/common/Tab';
import DeleteNavigation from '@/components/scrap/DeleteNavigation';
import { CreateScrapToast, DeleteScrapToast } from '@/components/scrap/Toast';
import UploadButton from '@/components/scrap/UploadButton';
import { useBottomNavigationContext } from '@/containers/HOC/NavigationContext';
import withNavigation from '@/containers/HOC/withNavigation';
import CategoryListContainer from '@/containers/scrap/CategoryListContainer';
import ContentListContainer from '@/containers/scrap/ContentListContainer';

const Scrap: NextPage = () => {
  const [selected, setSelected] = useState({ category: false, content: false });
  const ref = useRef<'category' | 'content'>('category');
  const setNavigation = useBottomNavigationContext()[1];
  const { show } = useToast();
  const popup = usePopup();

  const handleDeleteScrap = () => {
    // TODO select 된 사진들 삭제 요청 mutation
    popup(
      <span>
        성공적으로{' '}
        <span
          css={(theme) =>
            css`
              color: ${theme.color.gray06};
            `
          }
        >
          삭제되었습니다
        </span>
      </span>,
      'success',
    );
  };
  const showDeleteScrapToast = () => show({ content: <DeleteScrapToast onDelete={handleDeleteScrap} /> });

  const handleTabClick = (key: 'content' | 'category') => (
    setNavigation(selected[key] ? <DeleteNavigation onClick={showDeleteScrapToast} /> : 'default'), (ref.current = key)
  );

  const handleMultiSelect = () =>
    setSelected((prev) => {
      const ret = { ...prev };
      const deleted = ret[ref.current];
      deleted ? setNavigation('default') : setNavigation(<DeleteNavigation onClick={showDeleteScrapToast} />);

      ret[ref.current] = !ret[ref.current];
      return ret;
    });

  const handleSearch = () => {
    // TODO search api & setState
  };

  const handleUploadToast = () => {
    // TODO Recoil provide
    show({ content: <CreateScrapToast /> });
  };

  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          width: 100%;
          gap: 10px;
        `}
      >
        <Search onSubmit={handleSearch} />
        <span
          onClick={handleMultiSelect}
          css={(theme) =>
            css`
              ${theme.font.R_BODY_15};
              min-width: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            `
          }
        >
          {selected[ref.current] ? '취소' : <Image src={'/icon/multiSelect.svg'} width={18} height={18} />}
        </span>
      </div>
      <span
        onClick={handleUploadToast}
        css={css`
          position: absolute;
          right: 0;
          bottom: 18px;
          z-index: 10;
        `}
      >
        <UploadButton />
      </span>
      <Tab>
        <Tab.Group>
          <Tab.Label onClick={() => handleTabClick('category')}>카테고리 별</Tab.Label>
          <Tab.Label onClick={() => handleTabClick('content')}>콘텐츠 별</Tab.Label>
        </Tab.Group>
        <Tab.Panel>
          <Tab.Content>
            <CategoryListContainer select={selected.category} />
          </Tab.Content>
          <Tab.Content>
            <ContentListContainer select={selected.content} />
          </Tab.Content>
        </Tab.Panel>
      </Tab>
    </>
  );
};

export default withNavigation(Scrap);
