import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import type { FormHTMLAttributes } from 'react';
import { useRef, useState } from 'react';

interface SearchProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: (query: string) => any;
}

const Search = (props: SearchProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <form
      {...props}
      onSubmit={(e) => {
        e.preventDefault();
        ref.current && ref.current.value && props.onSubmit?.(ref.current.value);
      }}
      css={css`
        position: ${open ? 'absolute' : 'relative'};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      `}
    >
      <motion.div
        animate={open ? 'open' : 'close'}
        variants={{
          open: { opacity: 1 },
          close: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        css={css`
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        `}
      >
        <button
          type={'button'}
          onClick={() => setOpen(false)}
          css={css`
            margin-right: 5px;
            width: 10px;
            height: 17px;
            position: relative;
            background-image: url('/icon/backArrow.svg');
          `}
        />
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
            open: { width: '100%' },
            close: { width: 0 },
          }}
          ref={ref}
          css={(theme) => css`
            border: 1px solid black;
            padding: 10px 30px;
            width: 100%;
            border-radius: 30px;
            ${theme.font.R_BODY_14};
            color: ${theme.color.gray02};
          `}
        />
        용
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
