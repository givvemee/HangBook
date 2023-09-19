'use client';

import { useRef, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { InputType } from '../type';
import { SearchForm, SearchIcon, SearchInput } from './style';

const SearchBookInput = ({ searching }: InputType) => {
  const textRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState('react');

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    searching(text);
    setText('');
    textRef?.current?.focus();
  };

  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        type="text"
        placeholder="Find the book."
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={textRef}
      />
      <SearchIcon>
        <IoSearchSharp />
      </SearchIcon>
    </SearchForm>
  );
};

export default SearchBookInput;
