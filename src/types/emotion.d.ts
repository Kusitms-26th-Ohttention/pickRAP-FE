import type { SerializedStyles } from '@emotion/react';

import type { EmotionTheme } from '@/styles/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends EmotionTheme {}
  export type CustomStyle =
    | (SerializedStyles | ((theme: Theme) => SerializedStyles))[]
    | SerializedStyles
    | ((theme: Theme) => SerializedStyles)
    | undefined
    | false
    | null;
}
