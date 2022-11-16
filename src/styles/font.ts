import { css } from '@emotion/react';

type Font = {
  size: number;
  weight: 'R' | 'M' | 'B';
  family: 'Noto Sans KR' | 'SCoreDream' | 'Montserrat';
};

const getFontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'M':
      return 500;
    case 'B':
      return 600;
    case 'R':
    default:
      return 400;
  }
};

const FONT = ({ size, weight, family }: Font) => css`
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
  font-family: ${family};
`;

export const font = {
  R_BODY_10: FONT({ size: 10, family: 'Noto Sans KR', weight: 'R' }),
  R_BODY_11: FONT({ size: 11, family: 'Noto Sans KR', weight: 'R' }),
  R_BODY_12: FONT({ size: 12, family: 'Noto Sans KR', weight: 'R' }),
  R_BODY_13: FONT({ size: 13, family: 'Noto Sans KR', weight: 'R' }),
  R_BODY_14: FONT({ size: 14, family: 'Noto Sans KR', weight: 'R' }),
  M_BODY_12: FONT({ size: 12, family: 'Noto Sans KR', weight: 'M' }),
  M_BODY_14: FONT({ size: 14, family: 'Noto Sans KR', weight: 'M' }),
  R_BODY_15: FONT({ size: 15, family: 'Noto Sans KR', weight: 'R' }),
  M_BODY_16: FONT({ size: 16, family: 'Noto Sans KR', weight: 'M' }),
  B_BODY_16: FONT({ size: 16, family: 'Noto Sans KR', weight: 'B' }),
  M_BODY_17: FONT({ size: 17, family: 'Noto Sans KR', weight: 'M' }),
  M_BODY_18: FONT({ size: 18, family: 'Noto Sans KR', weight: 'M' }),
  M_BODY_20: FONT({ size: 20, family: 'Noto Sans KR', weight: 'M' }),
  B_BODY_20: FONT({ size: 20, family: 'Noto Sans KR', weight: 'B' }),

  M_POINT_11: FONT({ size: 11, family: 'SCoreDream', weight: 'M' }),
  M_POINT_14: FONT({ size: 14, family: 'SCoreDream', weight: 'M' }),
  B_POINT_14: FONT({ size: 14, family: 'SCoreDream', weight: 'B' }),
  M_POINT_15: FONT({ size: 15, family: 'SCoreDream', weight: 'M' }),
  M_POINT_16: FONT({ size: 16, family: 'SCoreDream', weight: 'M' }),
  B_POINT_16: FONT({ size: 16, family: 'SCoreDream', weight: 'B' }),
  B_POINT_17: FONT({ size: 17, family: 'SCoreDream', weight: 'B' }),
  M_POINT_18: FONT({ size: 18, family: 'SCoreDream', weight: 'M' }),
  B_POINT_18: FONT({ size: 18, family: 'SCoreDream', weight: 'B' }),
  M_POINT_20: FONT({ size: 20, family: 'SCoreDream', weight: 'M' }),
  B_POINT_20: FONT({ size: 20, family: 'SCoreDream', weight: 'B' }),
  B_POINT_24: FONT({ size: 24, family: 'SCoreDream', weight: 'B' }),
};
