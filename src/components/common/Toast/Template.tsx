import { css } from '@emotion/react';
import type { ReactElement } from 'react';
import React from 'react';

import useClickOutside from '@/application/hooks/useClickOutside';
import { useToastContext } from '@/components/common/Toast/context';

interface TemplateProps {
  children: ReactElement | string;
  id: number;
}

/**
 * @todo
 *  toast 종류에 따라 Template 에 애니메이션/스타일링 추가
 *  backdrop 여부
 */
const Template = ({ children, id }: TemplateProps) => {
  const setToasts = useToastContext()[1];
  const ref = useClickOutside<HTMLDivElement>(() => setToasts((prev) => prev.filter((t) => t.id !== id)));

  return (
    <>
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          background: rgba(0, 0, 0, 0.2);
          content: '';
        `}
      />
      <div
        ref={ref}
        css={(theme) => css`
          padding: 24px 16px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background: ${theme.color.white01};
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: auto;
        `}
      >
        {children}
      </div>
    </>
  );
};

export default Template;
