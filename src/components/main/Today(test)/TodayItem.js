import React from 'react';
import styled from 'styled-components';

const TodaysWrap = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 560px;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: 60px;
    color: ${props => props.theme.textColor};
`
const TodaysLeft = styled.div`
    width: 30%;
    padding-top: 30px;
    position: relative;
`
const TodaysImg = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`
const TodaysRight = styled.div`
    width: 65%;

`
const SearchTitle = styled.div`
    text-align: left;
    font-size: 28px;
    margin: 20px 0;
    padding: 10px 0 0;
    font-weight: bold;
`
const TodaysCategory = styled.div`
    color: #aaa;
    width: 80%;
    /* margin: 0 auto; */
    font-size: 12px;
`
const TodaysDesc = styled.div`
    font-size: 18px;
    margin: 20px 0 40px;
`
const TodaysRightBtm = styled.div`
    border-top: 1px solid #aaa;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    p {
        width: 49%;
        margin: 5px 0;
        margin-right: 1%;
        font-size: 14px;
    }
    span {
        font-size: 16px;
        margin-right: 10px;
        font-weight: bold;
    }
`
const TodayItem = ({recommend}) => {
    const {title, description, categoryName, cover, isbn, author, pubDate, priceSales, publisher, bestRank} = recommend;
    return (

        <TodaysWrap>

            <TodaysLeft>

                <TodaysImg src={cover} alt={title} />
            </TodaysLeft>
            <TodaysRight>
                <div>

                    <SearchTitle>{title}</SearchTitle>
                    <TodaysCategory>{categoryName}</TodaysCategory>
                    <TodaysDesc>{description}</TodaysDesc>
                </div>
                <TodaysRightBtm>
                    <p><span>지은이 : </span>{author}</p>
                    <p><span>출판사 : </span>{publisher}</p>
                    <p><span>출간일 : </span>{pubDate}</p>
                    <p><span>ISBN : </span>{isbn}</p>
                    <p><span>가격 : </span>{priceSales}</p>
                    <p><span>현재 베스트셀러 순위 : </span>{bestRank}</p>
                </TodaysRightBtm>
            </TodaysRight>
            {/* <h2>ㅠㅠㅠ</h2> */}
        </TodaysWrap>
    );
};

export default TodayItem;