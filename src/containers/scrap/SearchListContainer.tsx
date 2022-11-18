import { css } from '@emotion/react';
import React from 'react';

import ContentListContainer from '@/containers/scrap/ContentListContainer';

interface SearchListContainerProps {
  params: string;
}
const SearchListContainer = ({ params }: SearchListContainerProps) => {
  // TODO 검색 데이터가 있으면 보여주기 with useQuery

  return (
    <div
      css={css`
        position: relative;
        height: 100%;
        overflow-y: hidden;
      `}
    >
      <div
        css={css`
          position: absolute;
          overflow: auto;
          top: 0;
          margin-top: 20px;
          left: 0;
          right: 0;
          bottom: 0;
          padding-bottom: 80px;
        `}
      >
        <ContentListContainer />
      </div>
    </div>
  );
};

export default SearchListContainer;
