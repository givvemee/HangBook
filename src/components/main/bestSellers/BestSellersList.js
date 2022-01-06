import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegWindowClose } from "react-icons/fa";

const BestItemsWrap = styled.div`
    width: 20%;
    height: 260px;
    /* border: 1px solid blue; */
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
    font-size: 14px;
    font-weight: bold;
`
const DetailsWrap = styled.div`
    position: fixed;
    height: 520px;
    width: calc((70vw - 100px) * 0.7);
    top: calc(10vh + 90px + 56px);
    right: calc(15vw + 50px);
    background: rgba(0, 0, 0, 0.4);
    z-index: 99;
    border-radius: 20px;
    overflow: hidden;
`
const DetailImg = styled.img`
    width: 400px;
    height: 450px;
`

const BestSellersList = ({items}) => {
    const {title, author, cover, description, publisher, bestRank} = items;
    const [showUpItem, setShowUpItem] = useState(false);
    const clickToShow = () => {
        setShowUpItem(prev => !prev);
    }
    const clickToClose = () => {
        setShowUpItem(false);
    }
    return (
        
        <BestItemsWrap>
            {
                showUpItem ? 
                <DetailsWrap>
                    <FaRegWindowClose onClick={clickToClose}/>
                    <p>Best Seller # {bestRank}</p>
                    <img src={cover} alt={title} />
                    <p></p>
                </DetailsWrap> : 
                null
            }
            <BestItems onClick={clickToShow}>
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