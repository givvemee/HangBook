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
    const [error , setError] = useState<null | string>('')
    const [keyword, setkeyword] = useState('리액트')
    
    const apiKey = process.env.REACT_APP_API_KEY;
    const searchApi = `https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${apiKey}&Query=${keyword}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901&Cover=Big`
   
    useEffect(() => {
        const searchData = async () => {
            try {
                const res = await axios.get(searchApi)
                const parsed = JSON.parse(res.data.substr(0, res.data.length - 1));                
                setIsLoading(true)
                setError(null)
                setData(parsed.item)
            } catch (e) {
                setError('Something went wrong')
            }
            setIsLoading(false)
        }
        searchData()
    }, [keyword])


    const searching = (keyword: string) => {
        setkeyword(keyword)
    }
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






