import { css } from '@emotion/react';

import Photo from '@/components/common/Photo';

// TODO 프로젝트 전역에서 사용하는 타입은 index.d.ts로 분리
interface Magazine {
  src: string;
  name: string;
}

interface MainMagazineProps {
  magazines: Magazine[];
}
const MainMagazine = ({ magazines }: MainMagazineProps) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 10px;
      `}
    >
      {magazines.map((magazine) => (
        <article key={magazine.src}>
          <Photo src={magazine.src} width={'120px'} height={'155px'} />
          <span
            css={(theme) =>
              css`
                ${theme.font.M_BODY_12};
                color: ${theme.color.gray04};
                line-height: 28px;
                letter-spacing: 0.005em;
              `
            }
          >
            {magazine.name}
          </span>
        </article>
      ))}
    </div>
  );
};

export default MainMagazine;
