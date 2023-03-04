import SearchPhotoListContainer from './SearchPhotoListContainer';

interface SearchListContainerProps {
  params?: string;
}

const SearchListContainer = ({ params }: SearchListContainerProps) => {
  // TODO const { magazines, fetchNextPage } =
  // TODO API 완성되면 magazines.length에 따라 return하기

  return (
    <>
      <span style={{ height: 26 }} />
      <SearchPhotoListContainer />
    </>
  );
};

export default SearchListContainer;
