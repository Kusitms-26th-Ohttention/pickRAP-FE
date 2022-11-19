import { css } from '@emotion/react';
import Image from 'next/image';

import { MOCK_GET_CATEGORIES } from '@/application/utils/mock';
import PhotoListContainer from '@/containers/scrap/PhotoListContainer';

interface SearchListContainerProps {
  params?: string;
}
const SearchListContainer = ({ params }: SearchListContainerProps) => {
  const data = MOCK_GET_CATEGORIES; // TODO useQuery with search value

  return data ? (
    <>
      <span style={{ height: 26 }} />
      <PhotoListContainer data={data} />
    </>
  ) : (
    <div
      css={css`
        width: 100%;
        text-align: center;
        margin-top: 46px;
      `}
    >
      <Image src={'/picture/noResult.svg'} width={170} height={148} />
    </div>
  );
};

export default SearchListContainer;
