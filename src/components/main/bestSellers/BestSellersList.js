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
    background: ${props => props.theme.itemBg};
    border-radius: 20px;
    position: relative;
    &:hover {
        cursor: pointer;
        background: #eee;
    }
`
const BestRank = styled.p`
    font-size: 50px;
    margin-top: 5px;
    margin-left: 5px;
    font-style: italic;
    font-weight: bold;
    opacity: .2;
`
const BestItemImg = styled.img`
    width: 85px;
    height: auto;
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
    background: rgba(0, 0, 0, 0.75);
    z-index: 99;
    border-radius: 20px;
    overflow: hidden;
    padding: 30px;
    display: flex;
    color: #fff;
    font-weight: bold;
`

const DetailsLeft = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding: 10px;
    position: relative;
`
const DetailsRank = styled.h4`
    text-align: center;
    font-size: 20px;
    padding: 20px 0;
`
const DetailsImg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform : translate(-50%, -50%);
`

const DetailsRight = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 30px;
`
const DetailsClose = styled.div`
    position: absolute;
    top: 20px; 
    right: 20px;
    color: white;
    font-size: 28px;
    cursor: pointer;
`
const DetailsTitle = styled.div`
    text-align: center;
    font-size: 28px;
    margin: 20px 0;
    padding: 10px 0 0;
`
const DetailsCategory = styled.div`
    color: #aaa;
    width: 80%;
    margin: 0 auto;
    font-size: 12px;
`
const DetailsDesc1 = styled.div`
    margin: 10px 0;
`
const DetailsDesc = styled.div`
    margin: 20px 0;
    font-size: 20px;
`

const BestSellersList = ({items}) => {
    const {title, author, cover, description, publisher, bestRank, categoryName} = items;
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
                    <DetailsLeft>
                        <DetailsRank>Best Seller # {bestRank}</DetailsRank>
                        <DetailsImg src={cover} alt={title} />

                    </DetailsLeft>
                    <DetailsRight>
                        <DetailsClose>
                            <FaRegWindowClose onClick={clickToClose}/>
                        </DetailsClose>
                        <DetailsTitle>{title}</DetailsTitle>
                        <DetailsCategory>{categoryName}</DetailsCategory>
                        <DetailsDesc>{description}</DetailsDesc>
                        <DetailsDesc1>지은이 : {author}</DetailsDesc1>
                        <DetailsDesc1>출판사 : {publisher}</DetailsDesc1>
                    </DetailsRight> 
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