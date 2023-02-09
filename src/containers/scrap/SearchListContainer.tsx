import { css } from '@emotion/react';
import Image from 'next/image';

import { useGetScrapBySearch } from '@/application/hooks/api/scrap';
import PhotoListContainer from '@/containers/scrap/PhotoListContainer';

interface SearchListContainerProps {
  params?: string;
}
const SearchListContainer = ({ params }: SearchListContainerProps) => {
  const { scraps, fetchNextPage } = useGetScrapBySearch({ search: params || '' });
  return scraps.length ? (
    <>
      <span style={{ height: 26 }} />
      <PhotoListContainer data={scraps} onEndReached={fetchNextPage} />
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
