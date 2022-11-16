import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

import { useInput } from '@/application/hooks/useInput';
import { ActiveButton } from '@/components/common/Button';
import { InputBase } from '@/components/common/Input';

interface TypedDetailProps {
  onSubmit?: (value: string) => void;
  onBack?: () => void;
  type: 'input' | 'textarea';
}

const TypedDetail = ({ onSubmit, onBack, type }: TypedDetailProps) => {
  const [title, setTitle] = useInput({ maxLength: 15 });
  const [hashtag, setHashtag] = useInput();
  const [memo, setMemo] = useInput();

  return (
    // TODO AuthForm 포함 Common Form 추상화
    <form
      onSubmit={(e) => {
        e.preventDefault();
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

      {/*TODO label-input 리팩토링 시급..*/}
      <div
        css={(theme) => css`
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
          ${theme.font.M_BODY_14};
          color: ${theme.color.gray03};
        `}
      >
        <div>
          <label
            htmlFor="title"
            css={css`
              margin-bottom: 8px;
            `}
          >
            콘텐츠 제목
          </label>
          <InputBase
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            rightPlaceholder={`${title.length}/15`}
          />
        </div>
        <div>
          <label
            htmlFor="hashtag"
            css={css`
              margin-bottom: 8px;
            `}
          >
            #해시태그{' '}
            <span
              css={(theme) => css`
                color: ${theme.color.red01};
                ${theme.font.R_BODY_15};
                vertical-align: middle;
              `}
            >
              *
            </span>
          </label>
          <InputBase
            value={hashtag}
            onChange={(e) => setHashtag(e.target.value)}
            placeholder={'필수 입력 사항입니다.'}
            id="hashtag"
          />
        </div>
        <div>
          <label
            htmlFor="memo"
            css={css`
              margin-bottom: 8px;
            `}
          >
            간단 메모
          </label>
          <InputBase id="memo" value={memo} onChange={(e) => setMemo(e.target.value)} />
        </div>
      </div>
      <ActiveButton active>다음</ActiveButton>
    </form>
  );
};

export default TypedDetail;
