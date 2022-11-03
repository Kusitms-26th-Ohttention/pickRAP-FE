import { css } from '@emotion/react';

type Font = {
  size: number;
  weight: 'R' | 'SB' | 'M' | 'B';
  family: 'Noto Sans KR' | 'SCoreDream' | 'Montserrat';
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

const FONT = ({ size, weight, family }: Font) => css`
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
  font-family: ${family};
`;

export const font = {
  R_BODY_10: FONT({ size: 10, family: 'Noto Sans KR', weight: 'R' }),
  M_BODY_10: FONT({ size: 10, family: 'Noto Sans KR', weight: 'M' }),
  B_BODY_10: FONT({ size: 10, family: 'Noto Sans KR', weight: 'SB' }),
  R_BODY_12: FONT({ size: 12, family: 'Noto Sans KR', weight: 'R' }),
  M_BODY_12: FONT({ size: 12, family: 'Noto Sans KR', weight: 'M' }),
  B_BODY_12: FONT({ size: 12, family: 'Noto Sans KR', weight: 'SB' }),
  R_BODY_14: FONT({ size: 14, family: 'Noto Sans KR', weight: 'R' }),
  M_BODY_14: FONT({ size: 14, family: 'Noto Sans KR', weight: 'M' }),
  B_BODY_14: FONT({ size: 14, family: 'Noto Sans KR', weight: 'SB' }),
  R_BODY_16: FONT({ size: 16, family: 'Noto Sans KR', weight: 'R' }),
  M_BODY_16: FONT({ size: 16, family: 'Noto Sans KR', weight: 'M' }),
  B_BODY_16: FONT({ size: 16, family: 'Noto Sans KR', weight: 'SB' }),
  R_BODY_18: FONT({ size: 18, family: 'Noto Sans KR', weight: 'R' }),
  M_BODY_18: FONT({ size: 18, family: 'Noto Sans KR', weight: 'M' }),
  B_BODY_18: FONT({ size: 18, family: 'Noto Sans KR', weight: 'SB' }),
  R_BODY_20: FONT({ size: 20, family: 'Noto Sans KR', weight: 'R' }),
  M_BODY_20: FONT({ size: 20, family: 'Noto Sans KR', weight: 'M' }),
  B_BODY_20: FONT({ size: 20, family: 'Noto Sans KR', weight: 'SB' }),
  R_BODY_22: FONT({ size: 22, family: 'Noto Sans KR', weight: 'R' }),
  M_BODY_22: FONT({ size: 22, family: 'Noto Sans KR', weight: 'M' }),
  B_BODY_22: FONT({ size: 22, family: 'Noto Sans KR', weight: 'SB' }),
  R_BODY_24: FONT({ size: 24, family: 'Noto Sans KR', weight: 'R' }),
  M_BODY_24: FONT({ size: 24, family: 'Noto Sans KR', weight: 'M' }),
  B_BODY_24: FONT({ size: 24, family: 'Noto Sans KR', weight: 'SB' }),

  M_POINT_12: FONT({ size: 12, family: 'SCoreDream', weight: 'M' }),
  SB_POINT_12: FONT({ size: 12, family: 'SCoreDream', weight: 'SB' }),
  B_POINT_12: FONT({ size: 12, family: 'SCoreDream', weight: 'B' }),
  M_POINT_14: FONT({ size: 14, family: 'SCoreDream', weight: 'M' }),
  SB_POINT_14: FONT({ size: 14, family: 'SCoreDream', weight: 'SB' }),
  B_POINT_14: FONT({ size: 14, family: 'SCoreDream', weight: 'B' }),
  M_POINT_16: FONT({ size: 16, family: 'SCoreDream', weight: 'M' }),
  SB_POINT_16: FONT({ size: 16, family: 'SCoreDream', weight: 'SB' }),
  B_POINT_16: FONT({ size: 16, family: 'SCoreDream', weight: 'B' }),
  M_POINT_18: FONT({ size: 18, family: 'SCoreDream', weight: 'M' }),
  SB_POINT_18: FONT({ size: 18, family: 'SCoreDream', weight: 'SB' }),
  B_POINT_18: FONT({ size: 18, family: 'SCoreDream', weight: 'B' }),
  M_POINT_20: FONT({ size: 20, family: 'SCoreDream', weight: 'M' }),
  SB_POINT_20: FONT({ size: 20, family: 'SCoreDream', weight: 'SB' }),
  B_POINT_20: FONT({ size: 20, family: 'SCoreDream', weight: 'B' }),
  M_POINT_22: FONT({ size: 22, family: 'SCoreDream', weight: 'M' }),
  SB_POINT_22: FONT({ size: 22, family: 'SCoreDream', weight: 'SB' }),
  B_POINT_22: FONT({ size: 22, family: 'SCoreDream', weight: 'B' }),
  M_POINT_24: FONT({ size: 24, family: 'SCoreDream', weight: 'M' }),
  SB_POINT_24: FONT({ size: 24, family: 'SCoreDream', weight: 'SB' }),
  B_POINT_24: FONT({ size: 24, family: 'SCoreDream', weight: 'B' }),
};
