import { css } from '@emotion/react';
import React from 'react';

// TODO 같은 css가 반복되고 단어 하나만 다른데 어떻게 축소시켜야 할지 모르겠음..
export const DeletePopup = (
  <span
    css={(theme) => css`
      ${theme.font.M_POINT_14};
      color: ${theme.color.gray03};
    `}
  >
    성공적으로{' '}
    <span
      css={(theme) =>
        css`
          ${theme.font.B_POINT_14};
          color: ${theme.color.gray02};
        `
      }
    >
      삭제되었습니다
    </span>
  </span>
);

export const SuccessPopup = (
  <span
    css={(theme) => css`
      ${theme.font.M_POINT_14};
      color: ${theme.color.gray03};
    `}
  >
    성공적으로{' '}
    <span
      css={(theme) =>
        css`
          ${theme.font.B_POINT_14};
          color: ${theme.color.gray02};
        `
      }
    >
      생성되었습니다.
    </span>
  </span>
);

export const EditPopup = (
  <span
    css={(theme) => css`
      ${theme.font.M_POINT_14};
      color: ${theme.color.gray03};
    `}
  >
    성공적으로{' '}
    <span
      css={(theme) =>
        css`
          ${theme.font.B_POINT_14};
          color: ${theme.color.gray02};
        `
      }
    >
      수정되었습니다.
    </span>
  </span>
);
