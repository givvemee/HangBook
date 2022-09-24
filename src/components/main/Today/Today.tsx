import React, {useEffect, useState} from 'react';
import axios, { AxiosResponse } from 'axios';
import TodayItem from './TodayItem';
import Title from '../../common/Title';
import styled from 'styled-components';
import Loading from '../../common/Loading';
import { IBook } from '../../common/interface';
interface IAxiosData {
    data: IBook[];
    item: IBook[];
}

const Main = () => {
    const [recommend, setRecommend] = useState<IBook[] | []>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<unknown | string>(null)
    const apiKey = process.env.REACT_APP_API_KEY;
    const bestSellersApi = `https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=Bestseller&MaxResults=50&start=1&SearchTarget=Book&output=js&Version=20131101&Cover=Big`

    
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(bestSellersApi)
                const resData = res?.data?.item;
                setRecommend(resData[Math.floor(Math.random(resData) * resData.length)])
            } catch (e) {
                setError(e)
            }
            setLoading(false)
        }
        getData()
    }, []);

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

const TodaysSubTitle = styled.p`
    width: 95%;
    margin: 0 auto;
    color: ${props => props.theme.textColor};
`