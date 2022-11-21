import { css } from '@emotion/react';

import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';

interface TabMagazineProps {
  magazines: Magazine[];
  selectItem?: boolean;
}
const TabMagazine = ({ magazines, selectItem }: TabMagazineProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 100%;
        padding-bottom: 80px; // TODO Bottom Navigation height constant
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

export default TabMagazine;
