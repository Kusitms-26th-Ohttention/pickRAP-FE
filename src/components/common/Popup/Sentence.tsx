import { css } from '@emotion/react';
import React from 'react';

export const DeletePopup = (
  <span>
    성공적으로{' '}
    <span
      css={(theme) =>
        css`
          color: ${theme.color.gray06};
        `
      }
    >
      삭제되었습니다
    </span>
  </span>
);
