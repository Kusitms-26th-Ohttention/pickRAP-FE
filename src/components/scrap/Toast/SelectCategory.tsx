import { css } from '@emotion/react';

import { useGetCategories } from '@/application/hooks/api/category';
import useModal from '@/application/hooks/common/useModal';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import useScrapForm from '@/application/store/scrap/useScrapForm';
import Photo from '@/components/common/Photo';
import CreateCategory from '@/components/scrap/Popup/CreateCategory';
import TypedComplete from '@/components/scrap/Toast/TypedComplete';

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

const newCategory = { file_url: '/icon/scrap/newCategory.svg', name: '새로운 카테고리 생성' } as Category;

const SelectCategory = () => {
  const { categories } = useGetCategories();

  const popup = usePopup();
  const { show } = useModal();

  const { handleScrap } = useScrapForm();
  const { replace, show: toast } = useToast();
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
            // TODO file name constant
            key={category.file_url || '/icon/scrap/defaultCategory.svg'}
            {...category}
            file_url={category.file_url || '/icon/scrap/defaultCategory.svg'}
            onClick={() => {
              handleScrap({ type: 'category', data: category.id });
              replace({ content: <TypedComplete /> });
            }}
          />
        ))}
        <SelectCategoryItem
          onClick={() => {
            show(
              <CreateCategory
                onSuccess={(id) => {
                  popup('성공적으로 생성 되었습니다', 'success');
                  handleScrap({ type: 'category', data: id });
                  // TODO popup().then Promise로 api 개선
                  // 현재 버그 가능성 많음
                  setTimeout(() => toast({ content: <TypedComplete /> }), 1500);
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
