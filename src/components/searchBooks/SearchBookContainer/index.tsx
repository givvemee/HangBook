import SearchBookSub from "../SearchBookSub";
import SearchBookSubLeft from "../SearchBookSubLeft";
import { SearchBookLeft, SearchBookRight, SearchBookWrap } from "./style";
import { useStore } from "store";
import Loading from "@/components/common/loading";

const SearchBookCont = () => {
  const { searchedData } = useStore();
  const { isLoading } = useStore();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBookWrap>
            {searchedData.slice(0, 1).map((books) => (
              <SearchBookLeft>
                <SearchBookSubLeft key={books.isbn13} books={books} />
              </SearchBookLeft>
            ))}
            <SearchBookRight>
              {searchedData.slice(1, 5).map((books) => (
                <SearchBookSub key={books.isbn} books={books} />
              ))}
            </SearchBookRight>
          </SearchBookWrap>
        </>
      )}
    </>
  );
};

export default SearchBookCont;
