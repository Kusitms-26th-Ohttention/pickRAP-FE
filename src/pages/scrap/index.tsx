import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useDeleteCategory } from '@/application/hooks/api/category';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import { useCategoryDeleteList, useResetCategoryDeleteList } from '@/application/store/scrap/categoryHook';
import { DeletePopup } from '@/components/common/Popup/Sentence';
import Search from '@/components/common/Search';
import { ThreeDotsSpinner } from '@/components/common/Spinner';
import Tab from '@/components/common/Tab';
import DeleteNavigation from '@/components/scrap/DeleteNavigation';
import { CreateScrapToast, DeleteScrapToast } from '@/components/scrap/Toast';
import UploadButton from '@/components/scrap/UploadButton';
import { useBottomNavigationContext } from '@/containers/HOC/NavigationContext';
import withAuth from '@/containers/HOC/withAuth';
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
  const [deleteState, isDeleteState] = useState(false);
  const [searchString, setSearchString] = useState('');

  const categoryDeleteItem = useCategoryDeleteList();
  const resetCategoryList = useResetCategoryDeleteList();

  // TODO 카테고리 상세 페이지 분리
  const [categoryInfo, setCategoryInfo] = useState<{ id: number; name: string }>({ id: 0, name: '' });
  const ref = useRef<SelectContextKey>('category');
  const setNavigation = useBottomNavigationContext()[1];
  const { show } = useToast();
  const popup = usePopup();

  const handleDeleteScrap = () => {
    resetCategoryStates();
    setSelected({ ...selected, [ref.current]: false });
    console.log('렌더링 확인용', selected);
    popup(DeletePopup, 'success');
  };

  const showDeleteScrapToast = () => show({ content: <DeleteScrapToast onDelete={handleDeleteScrap} /> });

  const handleTabClick = (key: SelectContextKey) => {
    setNavigation(selected[key] ? <DeleteNavigation onClick={showDeleteScrapToast} /> : 'default');
    ref.current = key;
  };

  const handleMultiSelect = () => {
    setSelected((prev) => {
      const ret = { ...prev };
      const deleted = ret[ref.current];
      deleted ? setNavigation('default') : setNavigation(<DeleteNavigation onClick={showDeleteScrapToast} />);
      ret[ref.current] = !ret[ref.current];
      return ret;
    });
  };

  const handleSearch = (search: string) => setSearchString(search);

  const handleUploadToast = () => show({ content: <CreateScrapToast /> });

  const handleClickCategoryList = (info: typeof categoryInfo) => {
    ref.current = 'categoryInfo';
    setCategoryInfo(info);
  };

  // 카테고리 삭제
  const categoryMutation = useDeleteCategory();
  const requestDeleteCategory = useCallback(() => {
    categoryMutation.mutate(
      {
        ids: categoryDeleteItem,
      },
      {
        onSuccess: () => resetCategoryList(),
      },
    );
  }, [categoryMutation, categoryDeleteItem, resetCategoryList]);

  const resetCategoryStates = () => {
    setNavigation('default');
    isDeleteState(!deleteState);
  };

  useEffect(() => {
    if (deleteState === true) {
      requestDeleteCategory();
      isDeleteState(false);
    }
  }, [deleteState, requestDeleteCategory]);

  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          width: 100%;
          gap: 10px;
          height: 28px;
          margin-bottom: 10px;
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
            <Image src={'/icon/backArrow.svg'} layout={'fill'} objectFit={'cover'} alt="뒤로가기" />
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
            {selected[ref.current] ? (
              <p onClick={() => resetCategoryList()}>취소</p>
            ) : (
              <Image src={'/icon/multiSelect.svg'} width={18} height={18} alt="삭제아이콘" />
            )}
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
          <SSRSafeSuspense fallback={<ThreeDotsSpinner />}>
            <Tab.Panel>
              <Tab.Content>
                {!categoryInfo.name ? (
                  <CategoryListContainer
                    select={selected.category}
                    onClickItem={handleClickCategoryList}
                    selectItem={selected[ref.current]}
                  />
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

export default withAuth(withNavigation(Scrap));
