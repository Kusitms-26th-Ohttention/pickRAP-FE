import { css } from '@emotion/react';
import React from 'react';

import { MOCK_GET_CATEGORIES } from '@/application/utils/mock';
import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';
import Select from '@/components/common/Select';

const ContentListContainer = ({ select }: { select?: boolean }) => {
  const data = MOCK_GET_CATEGORIES; // TODO useQuery with Select value
  return (
    <>
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
      <div css={CSSContentListContainer}>
        {data.map((photo) => (
          <Photo
            custom={css`
              aspect-ratio: 1/1;
            `}
            key={photo.id}
            src={photo.file_url}
            blur={<PhotoSelect enabled={select} />}
          />
        ))}
      </div>
    </>
  );
};

const CSSContentListContainer = css`
  display: grid;
  margin-top: 12px;
  grid-template-columns: repeat(2, minmax(60px, 1fr));
  gap: 9px;
`;

export default ContentListContainer;
