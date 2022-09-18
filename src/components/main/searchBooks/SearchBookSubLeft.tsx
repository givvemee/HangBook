import React from 'react';
import styled from 'styled-components';
import { IBook } from '../../common/interface';

const LeftImg = styled.img`
    width: 160px;
    height: auto;
    margin: 20px auto;
    text-align: center;
`
const LeftTitle = styled.p`
    font-size: 18px;
    margin: 30px 0 20px;
    font-weight: bold;
    font-style: italic;
`
const LeftBookTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
`
const LeftInfo = styled.p`
    margin: 10px 0;
    font-size: 12px;
`
const LeftDesc = styled.p`
    width: 80%;
    margin: 10px auto;
`
type Propss = {
    books: IBook;
}

const SearchBookSubLeft = ({books}: Propss) => {
    const {title, author, cover, description} = books;
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
                    <LeftDesc>
                        {
                            description.length < 100 ? description : description.substr(0, 70) + "..."
                        }
                    </LeftDesc>
                </li>
            </ul>
        </>
    );
};

export default SearchBookSubLeft;


