import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BottomNavigation = () => {
  const router = useRouter();
  return (
    <nav
      css={css`
        display: flex;
        background: white;
        width: 100%;
        position: fixed;
        bottom: 0;
        max-width: 440px;
        padding-top: 12px;
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}
    >
      {Object.entries(ICON_PROPERTY).map(([key, value]) => (
        <Link href={`/${key}`} key={key}>
          <button
            css={css`
              flex: 1 1 auto;
              position: relative;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              padding-bottom: 12px;
            `}
          >
            {router.pathname === `/${key}` ? (
              <Image src={`/icon/${key}.active.svg`} {...value.active} />
            ) : (
              <Image src={`/icon/${key}.svg`} {...value.default} />
            )}
          </button>
        </Link>
      ))}
    </nav>
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
