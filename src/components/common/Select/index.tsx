import { css } from '@emotion/react';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import useClickOutside from '@/application/hooks/useClickOutside';

import type { SelectProps } from './context';
import { SelectContext, useSelectContext } from './context';

/**
 * 1. Select
 *  - Props: onChangeCallback, value
 *  - 현재 선택된 value, OptionList의 open 여부, onChangeCallback
 *  - setContext provide
 *
 * 2. Trigger
 *  - 현재 선택된 value 표시
 *  - 클릭 시 open 활성화
 *
 * 3. OptionList
 *  - open 여부에 따라 Option 자식들 렌더링
 *  - 요소 밖 클릭 시 open 비활성화
 *
 * 4. Option
 *  - option 렌더링
 *  - option 클릭 시 open 비활성화, setContext(value), onChangeCallback()
 *
 */

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
  return (
    <button
      css={css`
        display: flex;
        align-items: center;
      `}
      onClick={() => setContext((prev) => ({ ...prev, open: !context.open }))}
    >
      <span
        css={(theme) => css`
          ${theme.font.B_POINT_20};
          color: ${theme.color.black02};
          line-height: 160%;
        `}
      >
        {context.value}
      </span>
      <div
        css={css`
          margin: 0 10px;
          width: 16px;
          height: 9px;
          position: relative;
          transform: ${context.open ? 'rotate(0)' : 'rotate(180deg)'};
          transition: transform 0.15s ease-in;
        `}
      >
        <Image layout="fill" objectFit="cover" src="/icon/selectArrow.svg" />
      </div>
    </button>
  );
};

const OptionList = ({ children }: PropsWithChildren) => {
  const [context] = useSelectContext();

  return (
    <ul
      role="listbox"
      css={(theme) => css`
        background-color: white;
        padding: 16px;
        margin-top: 2px;
        box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        width: 128px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        ${theme.font.M_BODY_14};
        line-height: 184%;

        color: ${theme.color.black02};

        opacity: ${context.open ? 1 : 0};
        visibility: ${context.open ? 'visible' : 'hidden'};
        position: absolute;
        z-index: 2; // TODO z index constant

        transition: opacity 0.15s ease-in-out;
      `}
    >
      {context.open ? children : null}
    </ul>
  );
};
const Option = ({ value }: { value: string }) => {
  const [context, setContext] = useSelectContext();

  return (
    <li
      role="option"
      onClick={() => {
        context.onChange?.(value);
        setContext((prev) => ({ ...prev, open: false, value }));
      }}
    >
      {value}
    </li>
  );
};

const Select = Object.assign(SelectRoot, { Trigger, OptionList, Option });

export default Select;
