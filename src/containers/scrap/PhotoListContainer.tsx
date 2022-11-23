import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React from 'react';

import useIntersectionObserver from '@/application/hooks/utils/useIntersectionObserver';
import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';

interface PhotoListContainerProps {
  data: Scrap[];
  select?: boolean;
  onEndReached?: () => void;
}
const PhotoListContainer = ({ data, select, onEndReached }: PhotoListContainerProps) => {
  const router = useRouter();
  const ref = useIntersectionObserver({ callback: onEndReached });
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
              onClick={() => !select && router.push(`/scrap/${photo.id}`)}
              key={photo.id}
              blur={<PhotoSelect enabled={select} />}
              src={photo.scrap_type === 'image' ? photo.file_url : photo.url_preview}
              text={photo.content}
            />
          ))}
        </div>
        <span ref={ref} />
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
