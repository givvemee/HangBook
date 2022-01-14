import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TodayItem from './TodayItem';
import Title from '../../common/Title';
import styled from 'styled-components';
import Loading from '../../common/Loading';

const TodaysSubTitle = styled.p`
    width: 95%;
    margin: 0 auto;
    color: ${props => props.theme.textColor};
`
const Main = () => {
    const [recommend, setRecommend] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const apiKey = 'ttb201403672030001'
    const bestSellersApi = `https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=Bestseller&MaxResults=50&start=1&SearchTarget=Book&output=js&Version=20131101&Cover=Big`

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(bestSellersApi)
                // console.log(Math.floor(Math.random(res.data.item) * res.data.item.length))
                console.log(res.data.item[Math.floor(Math.random(res.data.item) * res.data.item.length)])
                setRecommend(res.data.item[Math.floor(Math.random(res.data.item) * res.data.item.length)])
            } catch (e) {
                setError(e)
            }
            setLoading(false)
        }
        getData()
        console.log(setRecommend)
    }, [])
    console.log(recommend)

    // if (loading) {
    //     return <div>Now Loading...</div>
    // }
    // if (error) {
    //     return <div>Something went wrong</div>
    // }
    return (
        <>
            <Title titleText="Today's Recommend for you"/>
            <TodaysSubTitle>HangBook will recommend a book only for you.</TodaysSubTitle>
            <div>

                {
                    loading ? 
                    <>
                        <Loading loadingTxt="Now Loading..." />
                    </>  : 
                    <TodayItem recommend={recommend}/>
                }
            </div>
        </>
    );
};

export default Main;