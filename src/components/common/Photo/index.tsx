import type { CustomStyle } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type { ReactElement } from 'react';

interface PhotoProps {
  src?: string;
  width?: string;
  height?: string;
  blur?: ReactElement;
  custom?: CustomStyle;
  text?: string;
  placeholder?: string;
  onClick?: () => void;
}

const base64Blur =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mO8/Z8BAzAOZUEAQ+ESj6kXXm0AAAAASUVORK5CYII=';

const Photo = ({ src, width, height, blur, custom, onClick, text, placeholder }: PhotoProps) => {
  return (
    <div
      onClick={onClick}
      css={[
        (theme) => css`
          width: ${width ? width : '100%'};
          height: ${height ? height : '100%'};
          border-radius: 4px;
          position: relative;
          background: ${theme.color.gray10};
          overflow: hidden;
        `,
        custom,
      ]}
    >
      {blur}
      {src ? (
        <Image
          blurDataURL={base64Blur}
          src={src}
          layout="fill"
          objectFit={'cover'}
          objectPosition="center"
          placeholder={'blur'}
        />
      ) : (
        // TODO 다른 컴포넌트로 책임 분리
        <div
          css={(theme) => css`
            width: 100%;
            height: 100%;
            background: ${theme.color.gray10};
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <span
            css={css`
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            `}
          >
            {text || placeholder}
          </span>
        </div>
      )}
    </div>
  );
};

export default Photo;
