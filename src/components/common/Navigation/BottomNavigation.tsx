import Image from 'next/image';
import { useRouter } from 'next/router';

import BottomNavigationBase from '@/components/common/Navigation/BottomNavigationBase';

const BottomNavigation = () => {
  const router = useRouter();
  return (
    <BottomNavigationBase>
      {(NavCell) =>
        Object.entries(ICON_PROPERTY).map(([key, value]) => (
          <NavCell onClick={() => router.push(`/${key}`)} key={key}>
            {router.pathname === `/${key}` ? (
              <Image src={`/icon/${key}.active.svg`} {...value} />
            ) : (
              <Image src={`/icon/${key}.svg`} {...value} />
            )}
          </NavCell>
        ))
      }
    </BottomNavigationBase>
  );
};

export default BottomNavigation;

const ICON_PROPERTY = {
  scrap: {
    width: 28,
    height: 37,
  },
  magazine: {
    width: 28,
    height: 37,
  },
  analysis: {
    width: 23,
    height: 37,
  },
  search: {
    width: 22,
    height: 37,
  },
} as const;
