import { css } from '@emotion/react';

type Font = {
  size: number;
  weight: 'R' | 'SB' | 'M' | 'B';
  position: 'Headline' | 'Body' | 'Caption' | 'Title' | 'Memo';
};

const getFontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'M':
      return 500;
    case 'SB':
      return 600;
    case 'B':
      return 700;
    case 'R':
    default:
      return 400;
  }
};

const getLetterSpacing = (position: Font['position']) => {
  switch (position) {
    case 'Body':
      return '-0.015em';
    case 'Title':
      return '-0.01em';
  }
};

const FONT = ({ size, weight, position }: Font) => css`
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
  letter-spacing: ${getLetterSpacing(position)};
`;

export const font = {
  R_12_TITLE: FONT({ size: 12, weight: 'R', position: 'Title' }),
  SB_12_TITLE: FONT({ size: 12, weight: 'SB', position: 'Title' }),
  R_13_TITLE: FONT({ size: 13, weight: 'R', position: 'Title' }),
  M_13_TITLE: FONT({ size: 13, weight: 'M', position: 'Title' }),
  M_13_BODY: FONT({ size: 13, weight: 'M', position: 'Body' }),
};
