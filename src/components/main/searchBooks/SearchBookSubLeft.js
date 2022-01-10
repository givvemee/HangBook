import React from 'react';
import styled from 'styled-components';

const LeftImg = styled.img`
    width: 160px;
    height: auto;
    margin: 20px auto;
    text-align: center;
`
const LeftTitle = styled.p`
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
    font-style: italic;
`
const LeftBookTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
`
const LeftInfo = styled.p`
    margin: 10px 0;
    font-size: 14px;
`
const LeftDesc = styled.p`
    width: 80%;
    margin: 10px auto;
`
const SearchBookSubLeft = ({books}) => {
    const {title, author, cover, description, publisher} = books;
    console.log(books);
    return (
        <>
            <LeftTitle>Most Relavant Result</LeftTitle>
            <LeftImg src={cover} alt={title}/>
            <ul>
                <li>
                    <LeftBookTitle>
                        {title}
                    </LeftBookTitle>
                </li>
                <li>
                    <LeftInfo>
                        {author}
                    </LeftInfo>
                </li>
                <li>
                    <LeftInfo>
                        {publisher}
                    </LeftInfo>
                </li>
                <li>
                    <LeftDesc>
                        {description}
                    </LeftDesc>
                </li>
            </ul>
        </>
    );
};

export default SearchBookSubLeft;