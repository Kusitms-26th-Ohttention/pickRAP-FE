import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import NoMagazine from '@/components/magazine/NoMagazine';
import PhotoListItem from '@/components/magazine/PhotoListItem';

interface MainMagazineProps {
  magazines: MagazineThumbnail[];
}
const MainMagazine = ({ magazines }: MainMagazineProps) => {
  const router = useRouter();
  return (
    <div
      css={css`
        display: flex;
        overflow-x: scroll;
        width: 100%;
        gap: 10px;
        margin-bottom: 48px;
      `}
    >
      {magazines.map((magazine) => (
        <PhotoListItem
          onClick={() => router.push(`/magazine/${magazine.magazine_id}`)}
          key={magazine.cover_url}
          item={magazine}
          width={'120px'}
          height={'155px'}
        />
      ))}
      {magazines.length === 0 && <NoMagazine />}
    </div>
  );
};

export default MainMagazine;
