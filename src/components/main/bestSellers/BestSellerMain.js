import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BestSellersList from './BestSellersList';
import styled from 'styled-components';
import Title from '../../common/Title';


const BestSellerWrap = styled.div`
    width: 95%;
    margin: 0 auto;
    height: inherit;
    border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    overflow-x: auto;
`
const BestSellerMain = () => {
    const [bestSellers, setBestSellers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const apiKey = 'ttb201403672030001'
    const bestSellersApi = `https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=Bestseller&MaxResults=50&start=1&SearchTarget=Book&output=js&Version=20131101`

    
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(bestSellersApi)
                setLoading(true)
                // console.log(res.data.item)
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
     
            {
                loading ? <div>Now Loading...</div> : 
                <BestSellerWrap>
                {
                    bestSellers.map(items => <BestSellersList key={items.isbbn13} items={items}/>)
                }
                </BestSellerWrap>
            }
        </div>
    );
};

export default BestSellerMain;