import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';

import { useInput } from '@/application/hooks/common/useInput';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import useScrapForm from '@/application/store/scrap/useScrapForm';
import SelectCategoryWithCreate from '@/components/category/Select/SelectCategoryWithCreate';
import { ActiveButton } from '@/components/common/Button';
import { InputBase } from '@/components/common/Input';
import Popup from '@/components/common/Popup';

interface TypedDetailProps {
  onSubmit?: (value: string) => void;
  onBack?: () => void;
  placeholder?: string;
  editTitle?: string;
  editHashtag?: string[];
  editMemo?: string;
  backState?: boolean;
}

/**
 * @todo
 * Compound Component 로 유연성 고려하기
 * placeholder props 추후 리팩토링
 */
const TypedComplete = ({
  onSubmit,
  onBack,
  editTitle,
  editHashtag,
  editMemo,
  backState,
  placeholder = '업로드 하기',
}: TypedDetailProps) => {
  const prevTags = editHashtag?.join(' ');
  const [title, setTitle] = useInput({ maxLength: 15, defaultValue: editTitle });
  const [hashtag, setHashtag] = useInput({ defaultValue: prevTags });
  const [memo, setMemo] = useInput({ defaultValue: editMemo });
  const { replace, show, close } = useToast();
  const popup = usePopup();
  const {
    scrap: { uploadRequest, ...rest },
  } = useScrapForm();
  const [isRequest, setIsRequest] = useState(false);

  return (
    // TODO AuthForm 포함 Common Form 추상화
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!hashtag && !prevTags) {
          show({ content: <Popup type={'warn'}>해시태그 입력은 필수입니다</Popup>, type: 'popup' });
          return;
        }
        const tags = hashtag.split(' ');
        setIsRequest(true);
        uploadRequest(
          { ...rest, hashtags: tags, title, memo },
          {
            onSuccess: () => {
              popup(`성공적으로 ${placeholder === '완료 하기' ? '수정' : '생성'} 되었습니다`, 'success');
              setIsRequest(false);
            },
          },
        );
      }}
      css={css`
        display: flex;
        flex-direction: column;
        gap: 28px;
      `}
    >
      <span
        onClick={() => (backState ? close() : replace({ content: <SelectCategoryWithCreate /> }))}
        css={(theme) =>
          css`
            display: flex;
            width: fit-content;
            gap: 9px;
            align-items: flex-start;
            vertical-align: middle;
            ${theme.font.B_POINT_17};
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
            defaultValue={editTitle ? editTitle : title}
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
            defaultValue={editHashtag ? prevTags : hashtag}
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
          <InputBase id="memo" defaultValue={editMemo ? editMemo : memo} onChange={(e) => setMemo(e.target.value)} />
        </div>
      </div>
      <ActiveButton active={!isRequest}>{placeholder}</ActiveButton>
    </form>
  );
};

export default TypedComplete;
