import { css } from '@emotion/react';
import React, { useState } from 'react';

import { MOCK_GET_CATEGORIES } from '@/application/utils/mock';
import Select from '@/components/common/Select';
import PhotoListContainer from '@/containers/scrap/PhotoListContainer';

interface ContentListContainerProps {
  select?: boolean;
}
const ContentListContainer = ({ select }: ContentListContainerProps) => {
  const [filter, setFilter] = useState('사진');
  const data = MOCK_GET_CATEGORIES; // TODO useQuery with Select value

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

      <PhotoListContainer data={data} select={select} />
    </>
  );
};

export default ContentListContainer;
