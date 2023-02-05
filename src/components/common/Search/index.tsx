import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { FormHTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { scrapReSearching } from '@/application/store/scrap/scrapState';

interface SearchProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: (query: string) => void;
  onClosed?: () => void;
  tagScrap?: string | string[] | undefined;
}

const Search = ({ onSubmit, onClosed, tagScrap }: SearchProps) => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [reValue, setReValue] = useRecoilState(scrapReSearching);

  const handleChangeValue = (newValue: string) => {
    setSearch(newValue);
  };

  useEffect(() => {
    if (tagScrap) {
      setOpen(true);
    }
  }, [tagScrap]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          ref.current.value && onSubmit?.(ref.current.value);
        }
        if (search) {
          setReValue(search);
          onSubmit?.(reValue);
        }
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
          if (search) {
            router.push('/scrap');
            setReValue('');
          }
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
          onChange={(e) => tagScrap && handleChangeValue(e.target.value)}
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
          // TODO 태그이름에 기본적으로 #이 붙어있느냐 안 붙어있느냐에 따라서 없어질 코드
          defaultValue={tagScrap ? (tagScrap[0] === '#' ? tagScrap.slice(1) : tagScrap) : ''}
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
