import { css } from '@emotion/react';
import React from 'react';

import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';

interface PhotoListContainerProps {
  data: Category[];
  select?: boolean;
}
const PhotoListContainer = ({ data, select }: PhotoListContainerProps) => {
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
          left: 0;
          right: 0;
          bottom: 0;
          padding-bottom: 26px;
        `}
      >
        <div css={CSSPhotoListContainer}>
          {data.map((photo) => (
            <Photo
              custom={css`
                aspect-ratio: 1/1;
              `}
              key={photo.id}
              blur={<PhotoSelect enabled={select} />}
              src={photo.file_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const CSSPhotoListContainer = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(60px, 1fr));
  gap: 9px;
`;
export default PhotoListContainer;
