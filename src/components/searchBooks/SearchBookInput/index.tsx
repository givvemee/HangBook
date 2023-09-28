"use client";

import { useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { SearchForm, SearchIcon, SearchInput } from "./style";
import { useStore } from "store";
import useHandler from "../handler";
import useStates from "../state";

const SearchBookInput = () => {
  const state = useStates();
  const { searchData } = useHandler(state);
  const textRef = useRef<HTMLInputElement>(null);
  const { searchKeyword, setSearchKeyword } = useStore();

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    textRef?.current?.focus();
  };

  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        type="text"
        placeholder="검색어를 입력해 주세요."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        ref={textRef}
      />
      <SearchIcon>
        <IoSearchSharp color={"#666"} onClick={searchData} />
      </SearchIcon>
    </SearchForm>
  );
};

export default SearchBookInput;
