import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Search from '@/components/common/Search';
import { ThreeDotsSpinner } from '@/components/common/Spinner';
import Tab from '@/components/common/Tab';
import withNavigation from '@/containers/HOC/withNavigation';
import SearchListContainer from '@/containers/scrap/SearchListContainer';
import SSRSafeSuspense from '@/containers/Suspense';

const Browse: NextPage = () => {
  const router = useRouter();
  const [searchString, setSearchString] = useState<string | undefined>('');

  const handleBack = () => {
    router.push('/search');
  };

  const handleSearch = (search?: string) => {
    setSearchString(search);
  };

  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-bottom: 10px;
          width: 100%;
          height: 28px;
        `}
      >
        <Search onSubmit={handleSearch} onClosed={() => setSearchString('')} onClosedRoute={handleBack} />
      </div>
      {searchString ? (
        <SSRSafeSuspense fallback={<ThreeDotsSpinner />}>
          <SearchListContainer params={searchString} />
        </SSRSafeSuspense>
      ) : (
        <Tab>
          <Tab.Group>
            <Tab.Label>매거진</Tab.Label>
          </Tab.Group>
        </Tab>
      )}
    </>
  );
};

export default withNavigation(Browse);
