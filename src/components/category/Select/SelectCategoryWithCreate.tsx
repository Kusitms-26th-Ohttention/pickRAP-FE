import axios from 'axios';
import { useState } from 'react';

import { useSaveCategory } from '@/application/hooks/api/category';
import useModal from '@/application/hooks/common/useModal';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import useScrapForm from '@/application/store/scrap/useScrapForm';
import { ERR_CODE } from '@/application/utils/constant';
import CreateCategory from '@/components/category/Modal/CreateCategory';
import SelectCategory from '@/components/category/Select/SelectCategory';
import SelectCategoryItem from '@/components/category/Select/SelectCategoryItem';
import TypedComplete from '@/components/scrap/Toast/TypedComplete';

const newCategory = { file_url: '/icon/scrap/newCategory.svg', name: '새로운 카테고리 생성' } as Category;

const SelectCategoryWithCreate = () => {
  const [submitForm, isSubmitForm] = useState(false);
  const popup = usePopup();
  const { show } = useModal();

  const { handleScrap } = useScrapForm();
  const { show: toast, close } = useToast();
  const mutation = useSaveCategory();
  return (
    <SelectCategory nextToast={<TypedComplete />} onClickItem={(id) => handleScrap({ type: 'category', data: id })}>
      <SelectCategoryItem
        onClick={() => {
          show(
            <CreateCategory
              onSubmit={(category, setError) => {
                mutation.mutate(
                  { name: category },
                  {
                    onSuccess: async ({ data }) => {
                      await close();
                      setTimeout(() => {
                        isSubmitForm(true);
                        toast({ content: <TypedComplete /> });
                      }, 500);
                      handleScrap({ type: 'category', data: data.data.id });
                      submitForm && popup('성공적으로 생성 되었습니다', 'success');
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
        }}
        {...newCategory}
      />
    </SelectCategory>
  );
};

export default SelectCategoryWithCreate;
