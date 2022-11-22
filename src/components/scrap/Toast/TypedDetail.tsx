import { css } from '@emotion/react';
import Image from 'next/image';
import type { Ref } from 'react';
import React, { useRef } from 'react';

import useToast from '@/application/hooks/common/useToast';
import useScrapForm from '@/application/store/scrap/useScrapForm';
import SelectCategoryWithCreate from '@/components/category/SelectCategoryWithCreate';
import { ActiveButton } from '@/components/common/Button';
import { InputBase } from '@/components/common/Input';
import CreateScrap from '@/components/scrap/Toast/CreateScrap';

interface TypedDetailProps {
  onSubmit?: (value: string) => void;
  onBack?: () => void;
  type: 'link' | 'text';
}

const TypedDetail = ({ onSubmit, onBack, type }: TypedDetailProps) => {
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>();
  const { replace } = useToast();
  const { handleScrap } = useScrapForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current?.value) {
          onSubmit?.(ref.current.value);
          handleScrap({ type, data: ref.current.value });
          replace({ content: <SelectCategoryWithCreate /> });
        }
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
            ${theme.font.B_POINT_17};
            color: ${theme.color.black02};
            line-height: 110%;
          `
        }
      >
        <Image
          src={'/icon/backArrow.svg'}
          width={10}
          height={17}
          onClick={() => replace({ content: <CreateScrap /> })}
        />
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
        {type === 'link' ? (
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
