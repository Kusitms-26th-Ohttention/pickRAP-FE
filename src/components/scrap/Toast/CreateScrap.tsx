import { css } from '@emotion/react';
import axios from 'axios';
import type { ChangeEvent } from 'react';
import { useEffect, useRef } from 'react';

import { useSaveCategory } from '@/application/hooks/api/category';
import { useSaveScrap } from '@/application/hooks/api/scrap';
import useModal from '@/application/hooks/common/useModal';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import useScrapForm from '@/application/store/scrap/useScrapForm';
import { ERR_CODE, ERR_MESSAGE } from '@/application/utils/constant';
import CreateCategory from '@/components/category/Modal/CreateCategory';
import SelectCategoryWithCreate from '@/components/category/Select/SelectCategoryWithCreate';
import { ActiveButton } from '@/components/common/Button';
import { SuccessPopup } from '@/components/common/Popup/Sentence';
import { TypedDetailToast } from '@/components/scrap/Toast/index';

const CreateScrap = () => {
  const { close, replace } = useToast();
  const { show } = useModal();
  const popup = usePopup();
  const { handleScrap, setRequest } = useScrapForm();
  const mutation = useSaveScrap();
  const categoryMutation = useSaveCategory();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setRequest(mutation.mutate);
  }, [mutation.mutate, setRequest]);

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const type = file.name.split('.').pop();
    if (!type) throw Error(ERR_MESSAGE.NOT_SUPPORTED_FILE);
    console.log(type);

    if (/(png|jpg|jpeg|gif|PNG|JPG|JPEG|GIF)/.test(type)) handleScrap({ type: 'image', data: file });
    else if (/pdf/.test(type)) handleScrap({ type: 'pdf', data: file });
    else if (/(mp4|mov|MOV)/.test(type)) handleScrap({ type: 'video', data: file });
    else throw Error(ERR_MESSAGE.NOT_SUPPORTED_FILE);

    replace({ content: <SelectCategoryWithCreate /> });
  };
  const handleLinkInput = () => replace({ content: <TypedDetailToast type={'link'} /> });
  const handleTextInput = () => replace({ content: <TypedDetailToast type={'text'} /> });
  const handleCategoryName = () =>
    show(
      <CreateCategory
        onSubmit={(category, setError) => {
          categoryMutation.mutate(
            { name: category },
            {
              onSuccess: () => {
                popup(SuccessPopup, 'success');
              },
              onError: (err) => {
                if (axios.isAxiosError(err)) {
                  err.response?.data.code === ERR_CODE.CREATE_DUPLICATED_CATEGORY && setError(true);
                }
              },
            },
          );
        }}
      />,
    );

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
            ${theme.font.B_POINT_17};
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
          <input type="file" ref={ref} onChange={handleFileInput} style={{ display: 'none' }} />
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
