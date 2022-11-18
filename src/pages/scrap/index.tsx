import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import usePopup from '@/application/hooks/usePopup';
import useToast from '@/application/hooks/useToast';
import { DeletePopup } from '@/components/common/Popup/Sentence';
import Search from '@/components/common/Search';
import Select from '@/components/common/Select';
import Tab from '@/components/common/Tab';
import DeleteNavigation from '@/components/scrap/DeleteNavigation';
import { CreateScrapToast, DeleteScrapToast } from '@/components/scrap/Toast';
import UploadButton from '@/components/scrap/UploadButton';
import { useBottomNavigationContext } from '@/containers/HOC/NavigationContext';
import withNavigation from '@/containers/HOC/withNavigation';
import CategoryListContainer from '@/containers/scrap/CategoryListContainer';
import ContentListContainer from '@/containers/scrap/ContentListContainer';
import SearchListContainer from '@/containers/scrap/SearchListContainer';

const Scrap: NextPage = () => {
  const [selected, setSelected] = useState({ category: false, content: false });
  const [searchString, setSearchString] = useState('');
  const ref = useRef<'category' | 'content'>('category');
  const setNavigation = useBottomNavigationContext()[1];
  const { show } = useToast();
  const popup = usePopup();

  const handleDeleteScrap = () => {
    // TODO select 된 사진들 삭제 요청 mutation
    setSelected({ ...selected, [ref.current]: false });
    popup(DeletePopup, 'success');
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

  const handleSearch = (search: string) => {
    // TODO search api & setState
    setSearchString(search);
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
          margin-bottom: 4px;
        `}
      >
        <Search onSubmit={handleSearch} onClosed={() => setSearchString('')} />
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
      {searchString ? (
        <SearchListContainer params={searchString} />
      ) : (
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
              <Select value={'사진'}>
                <Select.Trigger />
                <Select.OptionList>
                  <Select.Option value={'사진'} />
                  <Select.Option value={'비디오'} />
                  <Select.Option value={'파일'} />
                  <Select.Option value={'링크'} />
                  <Select.Option value={'텍스트'} />
                </Select.OptionList>
              </Select>
              <ContentListContainer select={selected.content} />
            </Tab.Content>
          </Tab.Panel>
        </Tab>
      )}
    </>
  );
};

export default withNavigation(Scrap);
