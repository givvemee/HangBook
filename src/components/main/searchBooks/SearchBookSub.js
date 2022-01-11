import React from 'react';
import styled from 'styled-components';

const SearchBookItems = styled.div`
    width: 45%;
    text-align: center;
    margin: 10px;
    padding: 10px;
`
const ItemImg = styled.img`
    width: 90px;
    height: auto;
`
const ItemTitle = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin: 5px 0;
`
const ItemAuthor = styled.p`
    font-size: 12px;
`
const SearchBookSub = ({books}) => {
    const {title, author, cover, description, publisher} = books
    return (
        <SearchBookItems>
            <ItemImg src={books.cover} alt={title}/>
            <ul>
                <li>
                    <ItemTitle>
                        {title}    
                    </ItemTitle>
                </li>
                <li>
                    <ItemAuthor>
                        {author}
                    </ItemAuthor>
                </li>
            </ul>
        </SearchBookItems>
    );
};

export default SearchBookSub;