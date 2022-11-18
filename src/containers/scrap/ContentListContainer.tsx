import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

import { MOCK_GET_CATEGORIES } from '@/application/utils/mock';
import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';

const ContentListContainer = ({ select }: { select?: boolean }) => {
  const data = MOCK_GET_CATEGORIES; // TODO useQuery with Select value
  return (
    <>
      {data ? (
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
