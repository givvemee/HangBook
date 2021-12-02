import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBookCont from './SearchBookCont';
import SearchBookInput from './SearchBookInput';

const SearchBookMain = () => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState('')
    const [keyword, setkeyword] = useState('apple')
    
    const apiKey = 'ttb201403672030001'
    const searchApi = `https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${apiKey}&Query=${keyword}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901`
   
    useEffect(() => {
        const searchData = async () => {
            try {
                const res = await axios.get(searchApi)
                // 끝에 세미콜론이 들어감! 
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
            <h2>책 rt</h2>
            <SearchBookInput searching={searching}/>
            {
                isLoading && setData.length === 0 && (<h1>No Data Found</h1>) 
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

    // useEffect(() => {
    //     axios.get(searchApi)
    //         .then(res => {
    //             setSearchBooks(res.data.item)
    //             setIsLoading(false)
    //             setError('')
    //         })
    //         .then(response => {
    //             var xml = new XMLParser().parseFromString(response)
    //             console.log(xml)
    //         })
    //         .catch ( e => {
    //             setSearchBooks([])
    //             setIsLoading(false)
    //             setError('Something went wrong')
    //             console.log(e)
    //         })
    // }, [keyword])
    