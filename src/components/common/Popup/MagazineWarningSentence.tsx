import { css } from '@emotion/react';
import React from 'react';

export const MagazineWarningPopup = (
  <span>
    매거진 표지를{' '}
    <span
      css={(theme) =>
        css`
          color: ${theme.color.gray06};
        `
      }
    >
      설정해주세요!
    </span>
  </span>
);
