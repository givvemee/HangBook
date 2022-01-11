import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../common/Loading';
import Title from '../../common/Title';
import SearchBookCont from './SearchBookCont';
import SearchBookInput from './SearchBookInput';
import SearchBookSubLeft from './SearchBookSubLeft';

const SearchBookMain = () => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState('')
    const [keyword, setkeyword] = useState('리액트')
    
    const apiKey = 'ttb201403672030001'
    const searchApi = `https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${apiKey}&Query=서울&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901&Cover=Big`
    // const searchApi = `ttb/api/ItemSearch.aspx?ttbkey=${apiKey}&Query=${keyword}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901`
   
    useEffect(() => {
        const searchData = async () => {
            try {
                const res = await axios.get(searchApi);
                // 끝에 세미콜론이 들어감! 
                console.log(typeof res);
                console.log(res.data.substring(0, res.data.length - 1));
                console.log(JSON.parse(res.data.substring(0, res.data.length - 1)))
                const parsed = JSON.parse(res.data.substring(0, res.data.length - 1));
                console.log(parsed)
                
                setIsLoading(true)
                setError(null)
                // setData(res.data.item)
                setData(parsed.item)
            } catch (e) {
                setError('Something went wrong')
                console.log(e)
            }
            setIsLoading(false)
        }
        searchData()
    }, [keyword])


    const searching = keyword => {
        setkeyword(keyword)
    }
    console.log(data)
    return (
        <div>
            <Title titleText="Search Books"/>
            <SearchBookInput searching={searching}/>
            {
                isLoading &&
                <>
                    <Loading loadingTxt="Now Loading..." />
                </>
            }
            {
                data && !isLoading && <SearchBookCont data={data}/>
            }
            {
                error ? error : null 
            }
        </div>
    );
};

export default SearchBookMain;







