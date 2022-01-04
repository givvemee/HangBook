import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BestSellersList from './BestSellersList';
import styled from 'styled-components';
import Title from '../../common/Title';

const BestCont = styled.section`
    width: 80vw;
    float: left;
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
                console.log(res.data.item)
                setError(null)
                setBestSellers(res.data.item)
            } catch (e) {
                setError(e)
            }
            setLoading(false)
        }
        getData()
    }, [])
    // if (loading) {
    //     return <div>Now Loading...</div>
    // }
    // if (error) {
    //     return <div>Something went wrong</div>
    // }
    return (
        <div>
            <h2>Best Sellers</h2>
            {
                loading ? <div>Now Loading...</div> : 
                <>
                {
                    bestSellers.map(items => <BestSellersList key={items.isbbn13} items={items}/>)
                }
                </>
            }
        </div>
    );
};

export default BestSellerMain;