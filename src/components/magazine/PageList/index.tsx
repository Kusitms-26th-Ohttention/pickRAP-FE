import { css } from '@emotion/react';

import PageListItem from '@/components/magazine/PhotoListItem';

interface Props {
  pages: MagazineThumbnail[];
  onSetThumbnail?: () => void;
}
const PageList = ({ pages, onSetThumbnail }: Props) => {
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
        <PageListItem
          key={page.magazine_id}
          item={page}
          ratio={'100/134'}
          onClick={idx === 0 ? onSetThumbnail : undefined}
        />
      ))}
      <PageListItem
        item={{ cover_url: '/icon/magazine/addPage.svg', title: '페이지 추가', magazine_id: 0 }}
        ratio={'100/134'}
      />
    </div>
  );
};

export default PageList;
