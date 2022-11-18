import { css } from '@emotion/react';
import type { ChangeEvent } from 'react';
import { useRef } from 'react';

import useModal from '@/application/hooks/useModal';
import useToast from '@/application/hooks/useToast';
import useUploadScrap from '@/application/store/scrap/useUploadScrap';
import { ActiveButton } from '@/components/common/Button';
import CreateCategory from '@/components/scrap/Popup/CreateCategory';
import { TypedDetailContentToast, TypedDetailToast } from '@/components/scrap/Toast/index';

const CreateScrap = () => {
  const { close, replace } = useToast();
  const { show } = useModal();
  const dispatch = useUploadScrap()[1];

  const ref = useRef<HTMLInputElement>(null);
  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    dispatch({ type: 'file', data: file });
    replace({ content: <TypedDetailContentToast /> });
  };
  const handleLinkInput = () => replace({ content: <TypedDetailToast type={'input'} /> });
  const handleTextInput = () => replace({ content: <TypedDetailToast type={'textarea'} /> });
  const handleCategoryName = () => show(<CreateCategory />);

  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        gap: 32px;
      `}
    >
      <span
        css={(theme) =>
          css`
            ${theme.font.B_POINT_16};
            color: ${theme.color.black02};
          `
        }
      >
        생성하기
      </span>
      <ul
        css={(theme) => css`
          display: flex;
          flex-direction: column;
          gap: 16.5px;
          color: ${theme.color.gray03};
          ${theme.font.M_BODY_14};
          line-height: 160%;
          margin-bottom: 20px;
        `}
      >
        <li
          onClick={() => {
            ref.current?.click();
          }}
        >
          내 디바이스에서 파일 업로드
          <input type="file" ref={ref} onChange={handleFileInput} style={{ display: 'none' }} />{' '}
        </li>
        <li onClick={handleLinkInput}>링크 업로드</li>
        <li onClick={handleTextInput}>텍스트 업로드</li>
        <li onClick={handleCategoryName}>카테고리 추가</li>
      </ul>
      <ActiveButton active onClick={close}>
        닫기
      </ActiveButton>
    </section>
  );
};

export default CreateScrap;
