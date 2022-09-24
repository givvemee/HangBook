import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BestSellersList from './BestSellersList';
import styled from 'styled-components';
import Title from '../../common/Title';
import Loading from '../../common/Loading';
import { IBook } from '../../common/interface';

const BestSellerMain = () => {
    const [bestSellers, setBestSellers] = useState<IBook[] | []>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<unknown | null>(null)
    const apiKey = process.env.REACT_APP_API_KEY;
    const bestSellersApi = `https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=Bestseller&MaxResults=50&start=1&SearchTarget=Book&output=js&Version=20131101&Cover=Big`
    
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(bestSellersApi)
                setLoading(true)
                setError(null)
                setBestSellers(res.data.item)
            } catch (e) {
                setError(e)
            }
            setLoading(false)
        }
        getData()
    }, [])

    
    return (
        <div>
            <Title titleText="Best Seller"></Title>
            <BestSellerView>
                {
                    loading ? 
                    <>
                        <Loading loadingTxt="Now Loading..." />
                    </> : 
                    <BestSellerWrap>
                    {
                        bestSellers.map((items: IBook) => <BestSellersList key={items.isbn13} items={items} />)
                    }
                    </BestSellerWrap>
                }
            </BestSellerView>
        </div>
    );
};

export default BestSellerMain;

const BestSellerWrap = styled.div`
    width: 95%;
    margin: 0 auto;
    padding-top: 20px;
    height: 560px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`
const BestSellerView = styled.div`
    overflow-x: hidden;
`