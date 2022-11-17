import { font } from '@/styles/font';

export const theme = {
  color: {
    black01: '#000000',
    black02: '#1e2329',
    black03: '#2a2e34',

    gray01: '#0f0f0f',
    gray02: '#282828',
    gray03: '#424242',
    gray04: '#5b5b5b',
    gray05: '#757575',
    gray06: '#8e8e8e',
    gray07: '#a8a8a8',
    gray08: '#c1c1c1',
    gray09: '#dbdbdb',
    gray10: '#f4f4f4',

    white01: '#ffffff',
    white02: '#f5f4f1',
    white03: '#eae8e2',
    white04: '#dfddd4',

    yellow01: '#fade44',

    red01: '#d53828',
    blue01: '#6484f8',
  },
  borderRadius: {
    default: '4px',
    outer: '6px',
  },
  size: {
    navigationHeight: '60px',
  },
  font,
} as const;

export type EmotionTheme = typeof theme;
