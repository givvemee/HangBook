"use client";

import { useEffect } from "react";
import { useStore } from "store";
import { PageTitle } from "../common/style";
import SearchBookCont from "./SearchBookContainer";
import SearchBookInput from "./SearchBookInput";
import useHandler from "./handler";
import useStates from "./state";
import { NoResult, SearchWrapper } from "./style";

const SearchBooksContainer = () => {
  const state = useStates();
  const handlers = useHandler(state);

  const { searchData } = handlers;

  const { searchedData, setSearchKeyword } = useStore();

  useEffect(() => {
    searchData();
  }, []);

  return (
    <SearchWrapper>
      <PageTitle>Search Books</PageTitle>
      <>
        <SearchBookInput />
        {searchedData.length > 0 ? (
          <SearchBookCont />
        ) : (
          <NoResult>
            <p>검색 결과가 없습니다.</p>
          </NoResult>
        )}
      </>
    </SearchWrapper>
  );
};

export default SearchBooksContainer;
