import { css } from '@emotion/react';

import PageListItem from '@/components/magazine/PhotoListItem';

interface Props {
  pages: (MagazineThumbnail & { onClick?: () => void })[];
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
      {pages.map((page, idx) => (
        <PageListItem key={idx} item={page} ratio={'100/134'} onClick={page.onClick} />
      ))}
    </div>
  );
};

export default PageList;
