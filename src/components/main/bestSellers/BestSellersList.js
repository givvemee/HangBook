import React from 'react';
import styled from 'styled-components';

const BestItemsWrap = styled.div`
    width: 20%;
    height: 240px;
`
const BestItems = styled.div`
    width: 130px;
    height: 170px;
    /* padding: 20px; */
    margin: 10px auto;
    background: #f0edf3;
    border-radius: 20px;
    position: relative;
`
const BestRank = styled.p`
    font-size: 50px;
    z-index: 10;
    font-style: italic;
    font-weight: bold;
    opacity: .2;
`
const BestItemImg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`
const BestItemTitle = styled.h4`
    margin-top: 20px;
    text-align: center;
    color: #a5a5a5;
    font-size: 16px;
    font-weight: bold;
`
const BestSellersList = ({items}) => {
    const {title, author, cover, description, publisher, bestRank} = items;
    
    const shortenTitle = () => {

    }
    return (
        <BestItemsWrap>
            <BestItems>
                <BestRank>{bestRank}</BestRank>
                <BestItemImg src={cover} alt={title}/>
                {/* <ul>
                    <li>{title}</li>
                    <li>{author}</li>
                    <li>{publisher}</li>
                    <li>{description}</li>
                </ul> */}
            </BestItems>
            <BestItemTitle>
                {
                    title.length < 10 ? title : title.substr(0, 10) + "..."
                }
            </BestItemTitle>
        </BestItemsWrap>
    );
};

export default BestSellersList;