import { css } from '@emotion/react';

import Photo from '@/components/common/Photo';

interface MagazineListItemProps {
  magazine: Magazine;
  width: string;
  height: string;
}
const MagazineListItem = ({ magazine, width, height }: MagazineListItemProps) => {
  return (
    <article key={magazine.src}>
      <Photo src={magazine.src} width={width} height={height} />
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
  );
};

export default MagazineListItem;
