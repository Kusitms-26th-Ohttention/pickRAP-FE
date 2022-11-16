import type { CustomStyle } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';

interface RoundPhotoProps {
  width: string;
  height: string;
  src: string;
  custom?: CustomStyle;
}
const RoundPhoto = ({ src, width, height, custom }: RoundPhotoProps) => {
  return (
    <span
      css={[
        css`
          position: relative;
          overflow: hidden;
          border-radius: 50%;
          width: ${width};
          height: ${height};
        `,
        custom,
      ]}
    >
      <Image src={src} layout="fill" objectFit={'cover'} />
    </span>
  );
};

export default RoundPhoto;
