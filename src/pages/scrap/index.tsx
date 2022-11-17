import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import { MOCK_GET_CATEGORIES } from '@/application/utils/mock';
import Search from '@/components/common/Search';
import Tab from '@/components/common/Tab';
import CategoryListItem from '@/components/scrap/CategoryListItem';
import UploadButton from '@/components/scrap/UploadButton';
import withNavigation from '@/containers/HOC/withNavigation';

const Scrap: NextPage = () => {
  const data = MOCK_GET_CATEGORIES;

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
        <Search
          onSubmit={() => {
            /**/
          }}
        />
        <Image src={'/icon/multiSelect.svg'} width={18} height={18} />
      </div>
      <span
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
          <Tab.Label>카테고리 별</Tab.Label>
          <Tab.Label>콘텐츠 별</Tab.Label>
        </Tab.Group>
        <Tab.Panel>
          <Tab.Content>
            <div css={CSSCategoryListContainer}>
              {data.map((category) => (
                <CategoryListItem src={category.file_url} title={category.name} key={category.id} />
              ))}
            </div>
          </Tab.Content>
          <Tab.Content>
            <div css={CSSCategoryListContainer}>
              {data.map((category) => (
                <CategoryListItem src={category.file_url} title={category.name} key={category.id} />
              ))}
            </div>
          </Tab.Content>
        </Tab.Panel>
      </Tab>
    </>
  );
};

const CSSCategoryListContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default withNavigation(Scrap);
