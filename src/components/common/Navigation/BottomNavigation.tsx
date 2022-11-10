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
              <Image src={`/icon/${key}.active.svg`} {...value.active} />
            ) : (
              <Image src={`/icon/${key}.svg`} {...value.default} />
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
    active: {
      width: 28,
      height: 37,
    },
    default: {
      width: 28,
      height: 35,
    },
  },
  magazine: {
    active: {
      width: 28,
      height: 37,
    },
    default: {
      width: 28,
      height: 35,
    },
  },
  analysis: {
    active: {
      width: 23,
      height: 37,
    },
    default: {
      width: 19,
      height: 36,
    },
  },
  search: {
    active: {
      width: 22,
      height: 37,
    },
    default: {
      width: 19,
      height: 35,
    },
  },
} as const;
