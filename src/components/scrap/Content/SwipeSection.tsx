import { css } from '@emotion/react';
import type { PropsWithChildren, ReactElement } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import Chip from '@/components/common/Chip';

const SwipeSectionContext = createContext<boolean>(false);

const OPEN_DELAY = 400;

function SwipeSectionRoot({ children, background }: PropsWithChildren<{ background?: ReactElement }>) {
  const [open, setOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => setOpen(true),
    onSwipedDown: () => setOpen(false),
  });

  /**
   * @todo (refactor)
   *   Background 컴포넌트 props로 받지 말고 children 에서 get 하기
   */
  return (
    <SwipeSectionContext.Provider value={open}>
      {background}
      <section
        {...handlers}
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          max-height: ${open ? '90vh' : '44vh'};
          height: 100%;
          background: #ffffff;
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
          border-radius: 10px 10px 0 0;
          padding: 10px 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          transition: max-height ${OPEN_DELAY}ms ease-in-out;
        `}
      >
        {children}
      </section>
    </SwipeSectionContext.Provider>
  );
}

const Able = ({ children }: PropsWithChildren) => {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <span
        css={css`
          width: 54px;
          height: 3px;
          background: #e2e2e2;
          border-radius: 13px;
          margin: auto;
          display: block;
        `}
      />
      <div
        css={css`
          margin-top: 19px;
        `}
      >
        {children}
      </div>
    </div>
  );
};

const Bottom = ({ children }: PropsWithChildren) => {
  return (
    <div
      css={css`
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 25px;
      `}
    >
      {children}
    </div>
  );
};

const Title = ({ children }: PropsWithChildren) => {
  return (
    <span
      css={(theme) =>
        css`
          ${theme.font.B_POINT_20};
          color: ${theme.color.black02};
          line-height: 1.6;
          margin-bottom: 10px;
        `
      }
    >
      {children}
    </span>
  );
};
const Description = ({ children }: PropsWithChildren) => {
  const init = useContext(SwipeSectionContext);
  const [isOpen, setIsOpen] = useState<boolean>();

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (init) id = setTimeout(() => setIsOpen(init), OPEN_DELAY / 2);
    else setIsOpen(false);
    return () => id && clearTimeout(id);
  }, [init]);

  return (
    <span
      css={[
        (theme) =>
          css`
            ${theme.font.R_BODY_12};
            color: ${theme.color.gray04};
            line-height: 1.6;
            margin-bottom: 10px;
            word-wrap: break-word;
          `,
        !isOpen &&
          css`
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          `,
      ]}
    >
      {children}
    </span>
  );
};

const Tag = ({ tags }: { tags: string[] }) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 8px;
      `}
    >
      {tags.map((tag) => (
        <Chip size={'small'} key={tag}>
          {tag}
        </Chip>
      ))}
    </div>
  );
};

const SwipeSection = Object.assign(SwipeSectionRoot, { Able, Bottom, Title, Description, Tag });

export default SwipeSection;
