import { css } from '@emotion/react';

import useModal from '@/application/hooks/useModal';
import usePopup from '@/application/hooks/usePopup';
import useToast from '@/application/hooks/useToast';
import useUploadScrap from '@/application/store/scrap/useUploadScrap';
import { MOCK_GET_CATEGORIES } from '@/application/utils/mock';
import Photo from '@/components/common/Photo';
import CreateCategory from '@/components/scrap/Popup/CreateCategory';
import TypedDetailContent from '@/components/scrap/Toast/TypedDetailContent';

interface SelectCategoryProps extends Pick<Category, 'name' | 'file_url'> {
  onClick: () => void;
}

const SelectCategoryItem = ({ file_url, name, onClick }: SelectCategoryProps) => {
  return (
    <li
      onClick={onClick}
      css={css`
        display: grid;
        grid-template-columns: 36px 1fr;
        height: 36px;
        gap: 10px;
        align-items: center;
      `}
    >
      <Photo
        src={file_url}
        custom={css`
          border-radius: 2px;
        `}
      />
      {name}
    </li>
  );
};

const defaultCategory = { file_url: '/icon/scrap/defaultCategory.svg', name: '카테고리 미지정' } as Category;
const newCategory = { file_url: '/icon/scrap/newCategory.svg', name: '새로운 카테고리 생성' } as Category;

const SelectCategory = () => {
  // TODO useQuery getCategories

  const categories = MOCK_GET_CATEGORIES;
  const popup = usePopup();
  const { show } = useModal();
  const { show: toast } = useToast();

  const dispatch = useUploadScrap()[1];
  const { replace } = useToast();
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
        카테고리 선택
      </span>
      <ul
        css={(theme) => css`
          display: flex;
          flex-direction: column;
          gap: 24px;
          color: ${theme.color.gray03};
          ${theme.font.M_BODY_14};
          line-height: 160%;
        `}
      >
        {categories.map((category) => (
          <SelectCategoryItem
            key={category.file_url}
            {...category}
            onClick={() => {
              dispatch({ type: 'category', data: category.id });
              replace({ content: <TypedDetailContent /> });
            }}
          />
        ))}
        <SelectCategoryItem
          onClick={() => {
            dispatch({ type: 'category', data: 0 });
            replace({ content: <TypedDetailContent /> });
          }}
          {...defaultCategory}
        />
        <SelectCategoryItem
          onClick={() => {
            show(
              <CreateCategory
                onSuccess={(id) => {
                  popup('성공적으로 생성 되었습니다', 'success');
                  dispatch({ type: 'category', data: id });
                  setTimeout(() => toast({ content: <TypedDetailContent /> }), 1200);
                }}
              />,
            );
          }}
          {...newCategory}
        />
      </ul>
    </section>
  );
};

export default SelectCategory;
