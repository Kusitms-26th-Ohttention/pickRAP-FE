import { css } from '@emotion/react';
import Image from 'next/image';
import type { Ref } from 'react';
import React, { useRef } from 'react';

import { ActiveButton } from '@/components/common/Button';
import { InputBase } from '@/components/common/Input';

interface TypedDetailProps {
  onSubmit?: (value: string) => void;
  onBack?: () => void;
  type: 'input' | 'textarea';
}

const TypedDetail = ({ onSubmit, onBack, type }: TypedDetailProps) => {
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(ref.current?.value);
        ref.current && onSubmit?.(ref.current.value);
      }}
      css={css`
        display: flex;
        flex-direction: column;
        gap: 28px;
      `}
    >
      <span
        css={(theme) =>
          css`
            display: flex;
            gap: 9px;
            align-items: flex-start;
            vertical-align: middle;
            ${theme.font.B_POINT_18};
            color: ${theme.color.black02};
            line-height: 110%;
          `
        }
      >
        <Image src={'/icon/backArrow.svg'} width={10} height={17} onClick={onBack} />
        세부사항 입력
      </span>

      <div
        css={(theme) => css`
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
          ${theme.font.M_BODY_14};
          color: ${theme.color.gray03};
        `}
      >
        {type === 'input' ? (
          <>
            <label htmlFor="link">링크 입력</label>
            <InputBase ref={ref as Ref<HTMLInputElement>} id="link" />
          </>
        ) : (
          <>
            {/* TODO textarea 추상화 */}
            <label htmlFor="text">텍스트 입력</label>
            <textarea
              ref={ref as Ref<HTMLTextAreaElement>}
              id="text"
              css={(theme) => css`
                border: 1px solid ${theme.color.gray09};
                width: 100%;
                height: 96px;
                padding: 8px 10px;
                &:focus {
                  border-color: ${theme.color.black02};
                }
              `}
            />
          </>
        )}
      </div>
      <ActiveButton active>다음</ActiveButton>
    </form>
  );
};

export default TypedDetail;
