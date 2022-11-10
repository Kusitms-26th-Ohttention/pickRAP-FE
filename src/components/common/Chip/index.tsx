import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import type { HTMLAttributes } from 'react';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  size: 'small' | 'large';
  active?: boolean;
}

const Chip = ({ children, size, active, ...rest }: ChipProps) => {
  return (
    <div {...rest} css={[CSSChipBase, size === 'large' && CSSChipLarge, active && CSSChipActive]}>
      {children}
    </div>
  );
};

const CSSChipBase = (theme: Theme) => css`
  width: fit-content;
  height: 22px;
  padding: 0 8px;
  border-radius: 11px;
  border: 1px solid ${theme.color.gray07};
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 26px;
  color: ${theme.color.gray06};
  ${theme.font.R_BODY_10};
`;

const CSSChipLarge = (theme: Theme) => css`
  height: 28px;
  border-radius: 14px;
  padding: 0 10px;

  ${theme.font.R_BODY_12};
`;

const CSSChipActive = (theme: Theme) => css`
  color: ${theme.color.white01};
  background: ${theme.color.black01};
  border-color: ${theme.color.black01};
`;

export default Chip;
