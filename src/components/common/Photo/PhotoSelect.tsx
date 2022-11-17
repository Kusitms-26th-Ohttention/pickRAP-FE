import { css } from '@emotion/react';
import Image from 'next/image';
import React, { useState } from 'react';

interface PhotoSelectProps {
  enabled?: boolean;
  onSelect?: (...args: any[]) => any;
  onUnselect?: (...args: any[]) => any;
}
const PhotoSelect = ({ enabled, onSelect, onUnselect }: PhotoSelectProps) => {
  const [drop, setDrop] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          if (!drop) onSelect?.();
          else onUnselect?.();
          setDrop(!drop);
        }}
        css={css`
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          position: absolute;
          z-index: 1;
          background: ${drop && enabled ? 'rgba(0,0,0,0.7)' : 'none'};
        `}
      />
      <span
        css={css`
          position: absolute;
          top: 8px;
          z-index: 2;
          display: ${drop && enabled ? 'inherit' : 'none'};
          right: 8px;
        `}
      >
        <Image src={'/icon/scrap/photoSelect.svg'} width={24} height={24} />
      </span>
    </>
  );
};

export default PhotoSelect;
