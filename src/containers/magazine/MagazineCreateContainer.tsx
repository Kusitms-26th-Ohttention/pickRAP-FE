import { css } from '@emotion/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import useToast from '@/application/hooks/common/useToast';
import { MAGAZINE_THUMBNAILS } from '@/application/utils/mock';
import SelectCategoryWithContent from '@/components/category/SelectCategoryWithContent';
import Switch from '@/components/common/Switch';
import PageList from '@/components/magazine/PageList';

interface Props {
  name?: string;
  privated?: boolean;
}
const MagazineCreateContainer = ({ name, privated }: Props) => {
  const [magazineName, setMagazineName] = useState(name || '제목');
  const isPrivate = useRef(privated ?? true);
  const { show } = useToast();

  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-top: 26px;
          margin-bottom: 12px;
        `}
      >
        <span
          css={(theme) =>
            css`
              ${theme.font.B_POINT_20};
              line-height: 160%;
              color: ${theme.color.black02};

              display: flex;
              align-items: center;
            `
          }
        >
          {magazineName}
          <button
            css={css`
              margin-left: 6px;
              width: 22px;
              height: 22px;
              position: relative;
            `}
          >
            <Image src={'/icon/edit.svg'} layout={'fill'} objectFit={'cover'} />
          </button>
        </span>
        <span
          css={(theme) =>
            css`
              ${theme.font.R_BODY_12} color: ${theme.color.gray04};
              letter-spacing: 0.005em;
              display: flex;
              align-items: center;
              gap: 8px;
            `
          }
        >
          비공개
          <Switch defaultChecked={isPrivate.current} onClick={(p) => (isPrivate.current = p)} />
        </span>
      </div>
      <PageList pages={MAGAZINE_THUMBNAILS} onSetThumbnail={() => show({ content: <SelectCategoryWithContent /> })} />
    </>
  );
};

export default MagazineCreateContainer;
