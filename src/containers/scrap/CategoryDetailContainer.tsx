import { css } from '@emotion/react';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';

import { useGetContentByCategory, useUpdateCategory } from '@/application/hooks/api/category';
import useModal from '@/application/hooks/common/useModal';
import usePopup from '@/application/hooks/common/usePopup';
import { ERR_CODE, ERR_MESSAGE } from '@/application/utils/constant';
import CreateCategory from '@/components/category/Modal/CreateCategory';
import { EditPopup } from '@/components/common/Popup/Sentence';
import PhotoListContainer from '@/containers/scrap/PhotoListContainer';

interface CategoryDetailContainerProps {
  info: { id: number; name: string };
  select?: boolean;
  selectItem?: boolean;
}

const CategoryDetailContainer = ({ select, info, selectItem }: CategoryDetailContainerProps) => {
  const { categories, fetchNextPage } = useGetContentByCategory({ id: info.id });
  const [categoryName, setCategoryName] = useState(info.name);
  const mutation = useUpdateCategory();
  const { show } = useModal();
  const popup = usePopup();

  return (
    <>
      <span
        css={(theme) =>
          css`
            ${theme.font.B_POINT_20};
            line-height: 160%;
            color: ${theme.color.black02};
            margin-top: 3.2vh;
            margin-bottom: 1.5vh;
            display: flex;
            align-items: center;
          `
        }
      >
        {categoryName}
        <button
          onClick={() =>
            show(
              <CreateCategory
                errMsg={ERR_MESSAGE.NOT_MODIFY_DEFAULT_CATEGORY}
                onSubmit={(category, setError) => {
                  mutation.mutate(
                    { id: info.id, name: category },
                    {
                      onSuccess: async () => {
                        setCategoryName(category);
                        popup(EditPopup, 'success');
                      },
                      onError: (err) => {
                        if (axios.isAxiosError(err)) {
                          err.response?.data.code === ERR_CODE.MODIFY_DUPLICATED_CATEGORY && setError(true);
                          err.response?.data.code === ERR_CODE.NOT_MODIFY_DEFAULT_CATEGORY && setError(true);
                        }
                      },
                    },
                  );
                }}
              />,
            )
          }
          css={css`
            margin-left: 6px;
            width: 22px;
            height: 22px;
            position: relative;
          `}
        >
          <Image src={'/icon/edit.svg'} layout={'fill'} objectFit={'cover'} alt="편집버튼" />
        </button>
      </span>
      <PhotoListContainer data={categories} select={select} onEndReached={fetchNextPage} selectItem={selectItem} />
    </>
  );
};

export default CategoryDetailContainer;
