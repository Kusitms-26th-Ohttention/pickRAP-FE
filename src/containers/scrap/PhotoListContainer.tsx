import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import useIntersectionObserver from '@/application/hooks/utils/useIntersectionObserver';
import { scrapIdsArray } from '@/application/store/scrap/scrapState';
import { getSrcByType } from '@/application/utils/helper';
import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';

interface PhotoListContainerProps {
  data: Scrap[];
  select?: boolean;
  selectItem?: boolean;
  onEndReached?: () => void;
  onClick?: () => void;
}
const PhotoListContainer = ({ data, select, selectItem, onEndReached }: PhotoListContainerProps) => {
  const router = useRouter();
  const ref = useIntersectionObserver({ callback: onEndReached });

  const setCategoryDetail = useSetRecoilState(scrapIdsArray);
  const pickSet = useRef(new Set<number>());

  const selectCategoryDetail = useCallback(
    (id: number) => {
      pickSet.current.has(id) ? pickSet.current.delete(id) : pickSet.current.add(id);
      setCategoryDetail(Array.from(pickSet.current));
    },
    [pickSet, setCategoryDetail],
  );

  const handleClickPhoto = (photoId: number) => {
    selectItem ? selectCategoryDetail(photoId) : router.push(`/scrap/${photoId}`);
  };

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
              key={photo.id}
              custom={css`
                aspect-ratio: 1/1;
              `}
              onClick={() => handleClickPhoto(photo.id)}
              blur={<PhotoSelect enabled={select} />}
              src={getSrcByType(photo)}
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
