import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import { MAGAZINE_THUMBNAILS, PROFILE } from '@/application/utils/mock';
import { MainMagazine } from '@/components/magazine/MagazineList';
import Profile from '@/components/magazine/Profile';
import MyMagazineWithTab from '@/components/magazine/Tab';
import UploadButton from '@/components/scrap/UploadButton';
import withNavigation from '@/containers/HOC/withNavigation';

const Magazine: NextPage = () => {
  const [isOpen, setIsOpen] = useState('down');
  const router = useRouter();

  const handleScrollDown = useCallback((direction: string) => setIsOpen(direction), []);
  const handleUpload = () => router.push('/magazine/upload');

  return (
    <AnimatePresence>
      <Profile {...PROFILE} />
      <motion.div
        initial="down"
        variants={{
          down: { height: 'auto' },
          up: { height: '0px' },
        }}
        animate={isOpen}
        transition={{
          duration: 0.3,
          staggerChildren: 0.015,
          staggerDirection: isOpen ? 1 : -1,
        }}
      >
        <div
          css={(theme) =>
            css`
              border: 1px solid ${theme.color.black03};
              margin-bottom: 24px;
            `
          }
        />
        <span
          css={(theme) =>
            css`
              ${theme.font.B_POINT_18};
              line-height: 26px;
              letter-spacing: 0.005em;
              margin-bottom: 12px;
            `
          }
        >
          나의 메인 매거진
        </span>
        <MainMagazine magazines={MAGAZINE_THUMBNAILS} />
      </motion.div>
      <span
        onClick={handleUpload}
        css={css`
          position: absolute;
          right: 0;
          bottom: 18px;
          z-index: 10;
        `}
      >
        <UploadButton />
      </span>
      <MyMagazineWithTab onScrollDown={handleScrollDown} />
    </AnimatePresence>
  );
};

export default withNavigation(Magazine);
