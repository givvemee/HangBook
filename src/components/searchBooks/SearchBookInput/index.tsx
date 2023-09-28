"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { InputType } from "../type";
import { SearchForm, SearchIcon, SearchInput } from "./style";
import { useStore } from "store";

const SearchBookInput = ({ searching }: InputType) => {
  const textRef = useRef<HTMLInputElement>(null);
  const { searchKeyword, setSearchKeyword } = useStore();

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    textRef?.current?.focus();
  };

  useEffect(() => {
    if (!searchKeyword) {
      setSearchKeyword("react");
    }
  }, []);

  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        type="text"
        placeholder="Find the book."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        ref={textRef}
      />
      <SearchIcon>
        <IoSearchSharp />
      </SearchIcon>
    </SearchForm>
  );
};

export default SearchBookInput;
