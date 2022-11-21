import { css } from '@emotion/react';

import PhotoListItem from '@/components/magazine/PhotoListItem';

interface MainMagazineProps {
  magazines: Magazine[];
}
const MainMagazine = ({ magazines }: MainMagazineProps) => {
  return (
    <div
      css={css`
        display: flex;
        overflow-x: scroll;
        width: 100%;
        gap: 10px;
      `}
    >
      {magazines.map((magazine) => (
        <PhotoListItem key={magazine.src} item={magazine} width={'120px'} height={'155px'} />
      ))}
    </div>
  );
};

export default MainMagazine;
