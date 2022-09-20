import React from 'react';
import styled from 'styled-components';
import { IBook } from '../../common/interface';
import SearchBookSub from './SearchBookSub';
import SearchBookSubLeft from './SearchBookSubLeft';

type Propss = {
    data: IBook[];
}

const SearchBookCont = ({data}: Propss) => {
    return (
        <SearchBookWrap>
            {
                data.slice(0, 1).map(books => 
                    <SearchBookLeft>
                        <SearchBookSubLeft key={books.isbn13} books={books}/>
                    </SearchBookLeft>
                )
            }
            <SearchBookRight>
                {
                    data.slice(1,5).map(books => 
                    <SearchBookSub key={books.isbn} books={books}/>)
                }
            </SearchBookRight>

        </SearchBookWrap>
    );
};

export default SearchBookCont;


const SearchBookWrap = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    color: ${props => props.theme.textColor};
`
const SearchBookLeft = styled.div`
    width: 45%;
    height: 450px;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
`
const SearchBookRight = styled.div`
    width: 53%;
    height: 450px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 10px;
`