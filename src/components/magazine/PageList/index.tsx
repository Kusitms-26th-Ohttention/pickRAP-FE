import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { pageIdsArray } from '@/application/store/magazine/state';
import PageListItem from '@/components/magazine/PhotoListItem';

interface Props {
  pages: (MagazineThumbnail & { onClick?: () => void })[];
  selectItem?: boolean;
}

const PageList = ({ pages, selectItem }: Props) => {
  const router = useRouter();

  // 썸네일 클릭 시 해당 id 추가, 선택 취소 시 id 확인 후 제거
  const setPageItems = useSetRecoilState(pageIdsArray);
  const pickSet = useRef(new Set<number>());

  const selectPageItems = useCallback(
    (id: number) => {
      pickSet.current.has(id) ? pickSet.current.delete(id) : pickSet.current.add(id);
      setPageItems(Array.from(pickSet.current));
    },
    [pickSet, setPageItems],
  );

  const handleMultiClickItem = (id: number) => {
    selectPageItems(id);
  };

  const handleEditItem = (id: number) => {
    console.log('click!', id);
    // router.push('/magazine/upload/page');
  };

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
        justify-content: space-between;
      `}
    >
      {pages.map((page, idx) => (
        <div
          key={idx}
          onClick={() => {
            idx !== 0 && idx !== pages.length
              ? selectItem
                ? handleMultiClickItem(page.scrap_id!)
                : handleEditItem(page.scrap_id!)
              : '';
          }}
        >
          {idx === 0 || idx === pages.length - 1 ? (
            <PageListItem item={page} ratio={'100/134'} />
          ) : (
            <PageListItem item={page} ratio={'100/134'} onClick={page.onClick} selectItem={selectItem} />
          )}
        </div>
      ))}
    </div>
  );
};

export default PageList;
