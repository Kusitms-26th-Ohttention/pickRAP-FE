import { css } from '@emotion/react';
import type { ButtonHTMLAttributes } from 'react';
import React, { useState } from 'react';

interface SwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  defaultChecked?: boolean;
  onActive?: () => any;
  onInactive?: () => any;
}

const Switch = ({ onActive, onInactive, defaultChecked, ...rest }: SwitchProps) => {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      {...rest}
      role="switch"
      aria-checked={on}
      css={css`
        position: relative;
        height: 26px;
        display: flex;
        align-items: center;
        padding: 8px;
        cursor: pointer;
      `}
      onClick={() => {
        if (on) onInactive?.();
        else onActive?.();

        setOn((p) => !p);
      }}
    >
      <span
        css={(theme) => css`
          background: ${on ? theme.color.yellow01 : theme.color.gray07};
          width: 35px;
          height: 17px;
          border-radius: 8px;
        `}
      />
      <span
        css={(theme) => css`
          display: inline-block;
          pointer-events: none;
          transition: transform 0.2s ease-in-out;
          background: white;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid ${theme.color.gray09};
          transform: translateX(${on ? '27px' : '0px'});
          position: absolute;
          left: 0;
        `}
      />
    </button>
  );
};

export default Switch;
