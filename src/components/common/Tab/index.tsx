/**
 *
 * Tab: Context로 상태관리 provide
 * Panel: 현재 선택된 label에 따라 알맞는 Content 렌더링
 * Group: 현재 선택된 label에 따라 알맞게 스타일링 prop 전달
 * Label: 클릭 이벤트 dispatch
 */

import type { CustomStyle } from '@emotion/react';
import { css } from '@emotion/react';
import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import { Children, cloneElement, createContext, isValidElement, useContext, useState } from 'react';

const TabContext = createContext<any[]>([0]);

interface TabRootProps extends HTMLAttributes<HTMLDivElement> {
  children:
    | string
    | ReactElement<HTMLAttributes<HTMLElement> & { idx?: number }>[]
    | ReactElement<HTMLAttributes<HTMLElement> & { idx?: number }>;
  css?: CustomStyle;
}

interface TabElementProps extends TabRootProps {
  idx?: number;
}

function TabRoot({ children }: PropsWithChildren) {
  const value = useState(0);
  return (
    <TabContext.Provider value={value}>
      <article>{children}</article>
    </TabContext.Provider>
  );
}

const Panel = ({ children }: TabRootProps) => {
  const [currentIdx] = useContext(TabContext);

  return (
    <section
      css={css`
        position: relative;
      `}
    >
      {Children.map(children, (child, e) => {
        return e === currentIdx
          ? child
          : isValidElement(child) &&
              cloneElement(child, {
                css: css`
                  visibility: hidden;
                `,
              });
      })}
    </section>
  );
};

const Group = ({ children }: TabRootProps) => {
  const [currentIdx] = useContext(TabContext);

  return (
    <section
      css={(theme) =>
        css`
          border-bottom: 1px solid ${theme.color.gray09};
          text-align: center;
        `
      }
    >
      {Children.map(children, (child, e) => {
        return isValidElement(child)
          ? e === currentIdx
            ? cloneElement(child, {
                css: (theme) => css`
                  color: ${theme.color.black02};
                `,
                idx: e,
              })
            : cloneElement(child, {
                idx: e,
              })
          : null;
      })}
    </section>
  );
};

const Label = ({ children, idx, css: style }: TabElementProps) => {
  const setIdx = useContext(TabContext)[1];

  return (
    <button
      css={[
        css`
          padding: 10px;
        `,
        style &&
          css`
            border-bottom: 2px solid #000;
          `,
      ]}
      onClick={() => setIdx(idx)}
    >
      <span
        css={[
          (theme) =>
            css`
              ${theme.font.M_POINT_16};
              color: ${theme.color.gray09};
            `,
          style,
        ]}
      >
        {children}
      </span>
    </button>
  );
};
const Content = ({ children, css: style }: TabElementProps) => {
  return (
    <div
      css={[
        css`
          padding-top: 26px;
          position: absolute;
        `,
        style,
      ]}
    >
      {children}
    </div>
  );
};

const Tab = Object.assign(TabRoot, { Group, Label, Panel, Content });
export default Tab;