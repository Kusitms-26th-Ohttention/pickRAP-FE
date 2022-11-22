import { css } from '@emotion/react';
import React, { useState } from 'react';

import { useGetScrapByType } from '@/application/hooks/api/scrap';
import Select from '@/components/common/Select';
import PhotoListContainer from '@/containers/scrap/PhotoListContainer';

interface ContentListContainerProps {
  select?: boolean;
}

const getTypeFromFilter = (filter: string) => {
  switch (filter) {
    case '사진':
      return 'image';
    case '비디오':
      return 'video';
    case '파일':
      return 'pdf';
    case '링크':
      return 'link';
    case '텍스트':
      return 'text';
    default:
      return 'image';
  }
};

const ContentListContainer = ({ select }: ContentListContainerProps) => {
  const [filter, setFilter] = useState('사진');

  // TODO 스크랩 타입 소문자로 통일하기
  const { scraps } = useGetScrapByType({ filter: getTypeFromFilter(filter) });

  return (
    <>
      <span
        css={css`
          margin-top: 26px;
          margin-bottom: 12px;
        `}
      >
        <Select value={'사진'} onChange={setFilter}>
          <Select.Trigger />
          <Select.OptionList>
            <Select.Option value={'사진'} />
            <Select.Option value={'비디오'} />
            <Select.Option value={'파일'} />
            <Select.Option value={'링크'} />
            <Select.Option value={'텍스트'} />
          </Select.OptionList>
        </Select>
      </span>

      <PhotoListContainer data={scraps || []} select={select} />
    </>
  );
};

export default ContentListContainer;
