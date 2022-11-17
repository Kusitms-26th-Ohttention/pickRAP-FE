import { css } from '@emotion/react';

import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';

// TODO 프로젝트 전역에서 사용하는 타입은 index.d.ts로 분리
interface Magazine {
  src: string;
  name: string;
}

interface OtherMagazineProps {
  magazines: Magazine[];
  selectItem?: boolean;
}
const OtherMagazine = ({ magazines, selectItem }: OtherMagazineProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 32px;
      `}
    >
      {magazines.map((magazine, idx) => (
        <article
          key={magazine.src}
          css={
            idx % 2 &&
            css`
              align-self: flex-end;
            `
          }
        >
          <Photo blur={<PhotoSelect enabled={selectItem} />} src={magazine.src} width={'196px'} height={'255px'} />
          <span
            css={(theme) =>
              css`
                margin-top: 8px;
                ${theme.font.M_BODY_18};
                color: ${theme.color.black01};
                vertical-align: middle;
                line-height: 160%;
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

export default OtherMagazine;
