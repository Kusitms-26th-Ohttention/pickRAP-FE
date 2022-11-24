import { css } from '@emotion/react';
import Image from 'next/image';

import Chip from '@/components/common/Chip';
import RoundPhoto from '@/components/common/Photo/RoundPhoto';

interface ProfileProps {
  src: string;
  name: string;
  description?: string;
  hashtags?: string[];
}
const Profile = ({ src, name, description, hashtags }: ProfileProps) => {
  return (
    <section
      css={css`
        margin-bottom: 24px;
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 48px auto;
          column-gap: 10px;
          margin-bottom: 16px;
        `}
      >
        <RoundPhoto
          width={'48px'}
          height={'48px'}
          src={src}
          custom={css`
            grid-row: 1 / span 2;
          `}
        />
        <span
          css={(theme) =>
            css`
              ${theme.font.M_BODY_17};
              color: ${theme.color.black02};
              letter-spacing: 0.005em;
              line-height: 26px;
              vertical-align: middle;
            `
          }
        >
          {name} 님<span style={{ width: 6 }} />
          <Image src={'/icon/magazine/profileNextArrow.svg'} width={7} height={12} />
        </span>
        <span
          css={(theme) => css`
            ${theme.font.M_BODY_12};
            color: ${theme.color.gray05};
            line-height: 20px;
            letter-spacing: 0.005em;
          `}
        >
          {description}
        </span>
      </div>
      <div
        css={css`
          display: flex;
          gap: 6px;
        `}
      >
        {hashtags?.map((tag) => (
          <Chip size={'small'} key={tag}>
            {tag}
          </Chip>
        ))}
      </div>
    </section>
  );
};

export default Profile;
