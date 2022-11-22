import CategoryContentList from '@/components/category/List/CategoryContentList';
import SelectCategory from '@/components/category/Select/SelectCategory';

// TODO query 요청 시 Photo가 렌더링이 되지 않아 토스트 팝업이 버벅여 보이는 문제
const SelectCategoryWithContent = () => {
  return <SelectCategory nextToast={<CategoryContentList onSubmit={(id) => console.log(id)} />}></SelectCategory>;
};

export default SelectCategoryWithContent;
