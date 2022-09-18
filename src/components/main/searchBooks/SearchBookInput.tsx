import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoSearchSharp } from "react-icons/io5";

const SearchForm = styled.form`
    width: 400px;
    position: relative;
    margin: 20px auto;
`
const SearchInput = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 20px;
    padding-left: 45px;
    font-family: 'Montserrat';
    box-shadow:2px 4px 16px 3px rgba(191,191,191,0.78);
    outline: none;
    border: none;
    &::placeholder {
        font-family: 'Montserrat';
    }
`
const SearchIcon = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    font-size: 20px;
`

const SearchBookInput = ({searching}) => {
    const textRef = useRef()
    const [ text , setText ] = useState('react')

    const onSubmit = (e) => {
        e.preventDefault() 
        if (!text) return;
        searching(text)
        setText('')
        textRef.current.focus()
    }

    return (
        <SearchForm onSubmit={onSubmit}>
            <SearchInput type="text" placeholder="Find the book." value={ text } onChange={ e => setText( e.target.value) } ref={textRef}/>
            <SearchIcon>
                <IoSearchSharp/>
            </SearchIcon>
        </SearchForm>
    );
};

export default SearchBookInput;