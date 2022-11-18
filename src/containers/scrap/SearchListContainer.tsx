import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

import { MOCK_GET_CATEGORIES } from '@/application/utils/mock';
import Photo from '@/components/common/Photo';

interface SearchListContainerProps {
  params: string;
}
const SearchListContainer = ({ params }: SearchListContainerProps) => {
  // TODO 검색 데이터가 있으면 보여주기 with useQuery
  const data = MOCK_GET_CATEGORIES; // TODO useQuery with Select value

  return (
    <div
      css={css`
        position: relative;
        height: 100%;
        overflow-y: hidden;
      `}
    >
      {data ? (
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
          <div css={CSSSearchListContainer}>
            {data.map((photo) => (
              <Photo
                custom={css`
                  aspect-ratio: 1/1;
                `}
                key={photo.id}
                src={photo.file_url}
              />
            ))}
          </div>
        </div>
      ) : (
        <div
          css={css`
            width: 100%;
            text-align: center;
            margin-top: 26px;
          `}
        >
          <Image src={'/picture/noResult.svg'} width={170} height={148} />
        </div>
      )}
    </div>
  );
};
const CSSSearchListContainer = css`
  display: grid;
  margin-top: 12px;
  grid-template-columns: repeat(2, minmax(60px, 1fr));
  gap: 9px;
`;
export default SearchListContainer;
