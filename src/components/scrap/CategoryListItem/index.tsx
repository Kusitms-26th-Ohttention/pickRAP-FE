import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';

interface CategoryListItemProps {
  src: string;
  title: string;
  onClick?: () => void;
  select?: boolean;
}

const CategoryListItem = ({ src, title, onClick, select }: CategoryListItemProps) => {
  return (
    <section
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        justify-content: space-between;
      `}
    >
      <Photo
        src={src}
        blur={<PhotoSelect enabled={select} />}
        custom={css`
          aspect-ratio: 1/1;
        `}
      />
      <div
        css={(theme) => css`
          border-bottom: 1px solid ${theme.color.gray10};
          position: relative;
        `}
      >
        <p
          css={(theme) => css`
            ${theme.font.B_BODY_16};
            color: ${theme.color.black03};
            max-width: 104px;
            line-height: 160%;
          `}
        >
          {title}
        </p>
        <span
          onClick={onClick}
          css={css`
            position: absolute;
            bottom: 14px;
            right: 0;
          `}
        >
          <Image src={'/icon/scrap/nextArrow.svg'} width={22} height={11} />
        </span>
      </div>
    </section>
  );
};

export default CategoryListItem;
