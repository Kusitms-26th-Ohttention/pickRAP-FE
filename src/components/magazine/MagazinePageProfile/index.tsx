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

const MagazinePageProfile = ({ src, name, description, hashtags }: ProfileProps) => {
  return (
    <section
      css={css`
        height: 100%;
      `}
    >
      <div css={MagazineProfileWrap}>
        <div
          css={css`
            margin: 21px 0 9px 0;
          `}
        >
          <RoundPhoto width={'132px'} height={'132px'} src={src} />
        </div>
        <div>
          <span
            css={(theme) =>
              css`
                ${theme.font.B_POINT_17};
                letter-spacing: 0.005em;
                line-height: 26px;
                margin-bottom: 16px;
              `
            }
          >
            {name}&nbsp;
          </span>
          <span
            css={(theme) =>
              css`
                ${theme.font.M_BODY_17};
              `
            }
          >
            님
          </span>
        </div>
        <div
          css={(theme) =>
            css`
              width: 308px;
              ${theme.font.R_BODY_12};
              color: ${theme.color.gray05};
              letter-spacing: 0.005em;
              line-height: 22.5px;
              margin-bottom: 56px;
              text-align: center;
            `
          }
        >
          {description}
        </div>
        <div
          css={css`
            display: flex;
            gap: 6px;
          `}
        >
          {hashtags?.map((tag) => (
            <Chip size={'large'} key={tag}>
              {tag}
            </Chip>
          ))}
        </div>
      </div>
    </section>
  );
};

const MagazineProfileWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MagazinePageProfile;
