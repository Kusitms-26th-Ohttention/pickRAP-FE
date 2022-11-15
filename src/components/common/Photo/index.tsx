import { css } from '@emotion/react';
import Image from 'next/image';

interface PhotoProps {
  src: string;
  width?: string;
  height?: string;
}

const Photo = ({ src, width, height }: PhotoProps) => {
  return (
    <div
      css={css`
        width: ${width ? width : '100%'};
        height: ${height ? height : '100%'};
        border-radius: 4px;
        position: relative;
        overflow: hidden;
      `}
    >
      <Image src={src} layout="fill" objectFit={'cover'} objectPosition="center" />
    </div>
  );
};

export default Photo;
