import { css } from '@emotion/react';

import Photo from '@/components/common/Photo';
import PhotoSelect from '@/components/common/Photo/PhotoSelect';

interface Props {
  item: MagazineThumbnail;
  selectItem?: boolean;
  width?: string;
  height?: string;
  ratio?: string;
  onClick?: () => void;
}
const PhotoListItem = ({ item, selectItem, ratio, ...rest }: Props) => {
  return (
    <article
      css={css`
        aspect-ratio: ${ratio || 'unset'};
      `}
    >
      <Photo
        blur={<PhotoSelect enabled={selectItem} />}
        custom={css`
          border-radius: 2px;
        `}
        src={item.cover_url}
        {...rest}
      />
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
        {item.title}
      </span>
    </article>
  );
};

export default PhotoListItem;
