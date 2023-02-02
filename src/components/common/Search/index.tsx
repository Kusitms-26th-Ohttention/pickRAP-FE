import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import type { FormHTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';

interface SearchProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: (query: string) => void;
  onClosed?: () => void;
  tagScrap?: string | string[] | undefined;
}

const Search = ({ onSubmit, onClosed, tagScrap }: SearchProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (tagScrap) {
      setOpen(true);
    }
  }, [tagScrap]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ref.current && ref.current.value && onSubmit?.(ref.current.value);
      }}
      css={css`
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      `}
    >
      <motion.button
        animate={open ? 'open' : 'close'}
        variants={{
          open: { opacity: 1 },
          close: { opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
        type={'button'}
        onClick={() => {
          setOpen(false);
          if (ref.current) ref.current.value = '';
          onClosed?.();
        }}
        css={css`
          margin-right: 5px;
          width: 10px;
          opacity: 0;
          z-index: 2;
          pointer-events: ${open ? 'initial' : 'none'};
          height: 17px;
          position: relative;
          background-image: url('/icon/backArrow.svg');
        `}
      />

      <motion.div
        animate={open ? 'open' : 'close'}
        variants={{
          open: { opacity: 1 },
          close: { opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
        css={css`
          position: relative;
          width: 100%;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        `}
      >
        <span
          css={(theme) => css`
            ${theme.font.M_BODY_16};
            color: ${theme.color.gray07};
            position: relative;
            display: inline-block;
            left: 24px;
          `}
        >
          #
        </span>
        <motion.input
          animate={open ? 'open' : 'close'}
          variants={{
            open: { opacity: 1 },
            close: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
          ref={ref}
          css={(theme) => css`
            border: 1px solid black;
            padding: 9px 30px;
            width: 100%;
            border-radius: 30px;
            ${theme.font.R_BODY_14};
            color: ${theme.color.gray02};
          `}
          defaultValue={tagScrap && tagScrap}
        />
      </motion.div>
      <button
        onClick={() => setOpen(true)}
        type={'submit'}
        css={css`
          position: absolute;
          right: 12px;
          vertical-align: middle;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          background-image: url('/icon/searchInput.active.svg');
          background-position: center;
        `}
      />
    </form>
  );
};

export default Search;
