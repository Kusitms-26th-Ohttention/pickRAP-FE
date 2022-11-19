import type { CustomStyle } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type { ReactElement } from 'react';

interface PhotoProps {
  src: string;
  width?: string;
  height?: string;
  blur?: ReactElement;
  custom?: CustomStyle;
  onClick?: () => void;
}

const Photo = ({ src, width, height, blur, custom, onClick }: PhotoProps) => {
  return (
    <div
      onClick={onClick}
      css={[
        css`
          width: ${width ? width : '100%'};
          height: ${height ? height : '100%'};
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        `,
        custom,
      ]}
    >
      {blur}
      <Image src={src} layout="fill" objectFit={'cover'} objectPosition="center" />
    </div>
  );
};

export default Photo;
