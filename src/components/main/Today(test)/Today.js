import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Main = () => {
    const [recommend, setRecommend] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const bestSellersApi = 'https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttb201403672030001&QueryType=Bestseller&MaxResults=50&start=1&SearchTarget=Book&output=js&Version=20131101'

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(bestSellersApi)
                console.log(res.data.item[4])
                console.log(Math.random(res.data.item) * res.data.item.length)
                setRecommend(Math.random(res.data.item))
            } catch (e) {
                setError(e)
            }
            setLoading(false)
        }
        getData()
    }, [])

    if (loading) {
        return <div>Now Loading...</div>
    }
    if (error) {
        return <div>Something went wrong</div>
    }
    return (
        <div>
            <h2>오늘의 책</h2>
        </div>
    );
};

export default Main;