import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import { DeletePopup } from '@/components/common/Popup/Sentence';
import Search from '@/components/common/Search';
import { ThreeDotsSpinner } from '@/components/common/Spinner';
import Tab from '@/components/common/Tab';
import DeleteNavigation from '@/components/scrap/DeleteNavigation';
import { CreateScrapToast, DeleteScrapToast } from '@/components/scrap/Toast';
import UploadButton from '@/components/scrap/UploadButton';
import { useBottomNavigationContext } from '@/containers/HOC/NavigationContext';
import withNavigation from '@/containers/HOC/withNavigation';
import CategoryDetailContainer from '@/containers/scrap/CategoryDetailContainer';
import CategoryListContainer from '@/containers/scrap/CategoryListContainer';
import ContentListContainer from '@/containers/scrap/ContentListContainer';
import SearchListContainer from '@/containers/scrap/SearchListContainer';
import SSRSafeSuspense from '@/containers/Suspense';

const initSelectedContext = { category: false, content: false, categoryInfo: false };
type SelectContextKey = keyof typeof initSelectedContext;

const Scrap: NextPage = () => {
  const [selected, setSelected] = useState(initSelectedContext);
  const [searchString, setSearchString] = useState('');

  // TODO 카테고리 상세 페이지 분리
  const [categoryInfo, setCategoryInfo] = useState<{ id: number; name: string }>({ id: 0, name: '' });
  const ref = useRef<SelectContextKey>('category');
  const setNavigation = useBottomNavigationContext()[1];
  const { show } = useToast();
  const popup = usePopup();

  const handleDeleteScrap = () => {
    // TODO select 된 사진들 삭제 요청 mutation
    // TODO select 된 category id / content id 관리
    setSelected({ ...selected, [ref.current]: false });
    popup(DeletePopup, 'success');
  };
  const showDeleteScrapToast = () => show({ content: <DeleteScrapToast onDelete={handleDeleteScrap} /> });

  const handleTabClick = (key: SelectContextKey) => {
    setNavigation(selected[key] ? <DeleteNavigation onClick={showDeleteScrapToast} /> : 'default');
    ref.current = key;
  };

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

  const handleUploadToast = () => show({ content: <CreateScrapToast /> });

  const handleClickCategoryList = (info: typeof categoryInfo) => {
    ref.current = 'categoryInfo';
    setCategoryInfo(info);
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
          align-items: center;
        `}
      >
        {categoryInfo.name ? (
          <span
            onClick={() => setCategoryInfo({ id: 0, name: '' })}
            css={css`
              width: 10px;
              height: 17px;
              position: absolute;
              z-index: 1;
              left: 0;
            `}
          >
            <Image src={'/icon/backArrow.svg'} layout={'fill'} objectFit={'cover'} />
          </span>
        ) : null}
        <Search onSubmit={handleSearch} onClosed={() => setSearchString('')} />
        {!searchString ? (
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
        ) : null}
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
        <SSRSafeSuspense fallback={<ThreeDotsSpinner />}>
          <SearchListContainer params={searchString} />
        </SSRSafeSuspense>
      ) : (
        <Tab>
          <Tab.Group>
            <Tab.Label onClick={() => handleTabClick('category')}>카테고리 별</Tab.Label>
            <Tab.Label onClick={() => handleTabClick('content')}>콘텐츠 별</Tab.Label>
          </Tab.Group>
          <SSRSafeSuspense fallback={null}>
            <Tab.Panel>
              <Tab.Content>
                {!categoryInfo.name ? (
                  <CategoryListContainer select={selected.category} onClickItem={handleClickCategoryList} />
                ) : (
                  <CategoryDetailContainer info={categoryInfo} select={selected.categoryInfo} />
                )}
              </Tab.Content>
              <Tab.Content>
                <ContentListContainer select={selected.content} />
              </Tab.Content>
            </Tab.Panel>
          </SSRSafeSuspense>
        </Tab>
      )}
    </>
  );
};

export default withNavigation(Scrap);
