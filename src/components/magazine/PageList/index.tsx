import { css } from '@emotion/react';

import PageListItem from '@/components/magazine/PhotoListItem';

interface Props {
  pages: MagazineThumbnail[];
}
const PageList = ({ pages }: Props) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
        justify-content: space-between;
      `}
    >
      {pages.map((page) => (
        <PageListItem key={page.magazine_id} item={page} ratio={'100/134'} />
      ))}
      <PageListItem
        item={{ cover_url: '/icon/magazine/addPage.svg', title: '페이지 추가', magazine_id: 0 }}
        ratio={'100/134'}
      />
    </div>
  );
};

export default PageList;
