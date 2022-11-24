import CategoryContentList from '@/components/category/List/CategoryContentList';
import CategoryContentListMultiSelect from '@/components/category/List/CategoryContentListMultiSelect';
import SelectCategory from '@/components/category/Select/SelectCategory';

// TODO query 요청 시 Photo가 렌더링이 되지 않고 height 가 없어 토스트 팝업이 버벅여 보이는 문제
type Props =
  | {
      multiSelect: true;
      onSubmit: (id: EditPage[]) => void;
    }
  | {
      multiSelect?: undefined | false;
      onSubmit: (id: EditPage) => void;
    };
const SelectCategoryWithContent = ({ multiSelect, onSubmit }: Props) => {
  return (
    <SelectCategory
      nextToast={
        multiSelect ? (
          <CategoryContentListMultiSelect onSubmit={onSubmit} />
        ) : (
          <CategoryContentList onSubmit={onSubmit} />
        )
      }
    />
  );
};

export default SelectCategoryWithContent;
