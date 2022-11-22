import axios from 'axios';

import { useSaveCategory } from '@/application/hooks/api/category';
import useModal from '@/application/hooks/common/useModal';
import usePopup from '@/application/hooks/common/usePopup';
import useToast from '@/application/hooks/common/useToast';
import useScrapForm from '@/application/store/scrap/useScrapForm';
import { ERR_CODE } from '@/application/utils/constant';
import CreateCategory from '@/components/category/CreateCategory';
import SelectCategory from '@/components/category/SelectCategory';
import SelectCategoryItem from '@/components/category/SelectCategoryItem';
import TypedComplete from '@/components/scrap/Toast/TypedComplete';

const newCategory = { file_url: '/icon/scrap/newCategory.svg', name: '새로운 카테고리 생성' } as Category;

const SelectCategoryWithCreate = () => {
  const popup = usePopup();
  const { show } = useModal();

  const { handleScrap } = useScrapForm();
  const { show: toast } = useToast();
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
                    onSuccess: ({ data }) => {
                      popup('성공적으로 생성 되었습니다', 'success');
                      handleScrap({ type: 'category', data: data.data.id });
                      // TODO popup().then Promise로 api 개선
                      // 현재 버그 가능성 많음
                      setTimeout(() => toast({ content: <TypedComplete /> }), 1500);
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
