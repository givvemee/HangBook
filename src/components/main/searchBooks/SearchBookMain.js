import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBookCont from './SearchBookCont';
import SearchBookInput from './SearchBookInput';
import XMLParser from 'react-xml-parser';

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
                // console.log(JSON.stringify(res.data.item))
                console.log(res.data)

                console.log(res.data)
                setIsLoading(true)
                setError(null)
                setData(res.data.item)
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
            {/* {
                isLoading && searchBooks.length === 0 && (<h1>No Data Found</h1>) 
            } */}
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
    