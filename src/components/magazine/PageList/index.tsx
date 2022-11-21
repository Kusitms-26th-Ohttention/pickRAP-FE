import { css } from '@emotion/react';

import PageListItem from '@/components/magazine/PhotoListItem';

interface Props {
  pages: { src: string; name: string }[];
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
        <PageListItem key={page.src} item={page} ratio={'100/134'} />
      ))}
      <PageListItem item={{ src: '/icon/magazine/addPage.svg', name: '페이지 추가' }} ratio={'100/134'} />
    </div>
  );
};

export default PageList;
