import type { SerializedStyles, Theme } from '@emotion/react';

interface APIResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

type CustomStyle =
  | (SerializedStyles | ((theme: Theme) => SerializedStyles))[]
  | SerializedStyles
  | ((theme: Theme) => SerializedStyles)
  | undefined
  | false
  | null;
