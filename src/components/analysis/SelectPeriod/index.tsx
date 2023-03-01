import { css } from '@emotion/react';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { useResetRecoilState } from 'recoil';

import useClickOutside from '@/application/hooks/utils/useClickOutside';
import { yearMonthBoxState } from '@/application/store/analysis/analysisState';
import Chip from '@/components/common/Chip';
import type { SelectProps } from '@/components/common/Select/context';
import { SelectContext, useSelectContext } from '@/components/common/Select/context';

interface SelectPeriod {
  onClick?: () => void;
}

function SelectRoot({ children, open, ...rest }: PropsWithChildren<SelectProps>) {
  const [context, setContext] = useState<SelectProps>({ ...rest, open: open ?? false });
  const ref = useClickOutside<HTMLUListElement>(() =>
    setContext((prev) => (prev.open ? { ...prev, open: false } : prev)),
  );

  return (
    <SelectContext.Provider value={[context, setContext]}>
      <section
        ref={ref}
        css={css`
          width: fit-content;
          position: relative;
        `}
      >
        {children}
      </section>
    </SelectContext.Provider>
  );
}

const Trigger = () => {
  const [context, setContext] = useSelectContext();
  const yearMonthBoxClose = useResetRecoilState(yearMonthBoxState);

  return (
    <Chip size="large" active>
      <button
        css={(theme) => css`
          color: ${theme.color.white01};
        `}
        onClick={() => {
          yearMonthBoxClose();
          setContext((prev) => ({ ...prev, open: !context.open }));
        }}
      >
        {context.value}
      </button>
    </Chip>
  );
};

const OptionList = ({ children }: PropsWithChildren) => {
  const [context] = useSelectContext();

  return (
    <ul
      css={(theme) => css`
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 169px;
        height: 160px;
        background-color: white;
        border: 1px solid ${theme.color.gray10};
        border-radius: 32px;
        ${theme.font.R_BODY_14}

        opacity: ${context.open ? 1 : 0};
        visibility: ${context.open ? 'visible' : 'hidden'};
        z-index: 2;
        top: 40px;
        right: -62px;
      `}
    >
      {context.open ? children : null}
    </ul>
  );
};

const Option = ({ value }: { value: string }) => {
  const [context, setContext] = useSelectContext();

  return (
    <>
      <li
        onClick={() => {
          context.onChange?.(value);
          setContext((prev) => ({ ...prev, open: false, value }));
        }}
        css={css`
          cursor: pointer;
        `}
      >
        {value}
      </li>
    </>
  );
};

const SelectPeriod = Object.assign(SelectRoot, { Trigger, OptionList, Option });

export default SelectPeriod;
