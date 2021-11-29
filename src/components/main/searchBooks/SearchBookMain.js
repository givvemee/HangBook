import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBookCont from './SearchBookCont';
import SearchBookInput from './SearchBookInput';
import XMLParser from 'react-xml-parser';

const SearchBookMain = () => {
    const [searchBooks, setSearchBooks] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState('')
    const [keyword, setkeyword] = useState('apple')
    
    const apiKey = 'ttb201403672030001'
    const searchApi = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${apiKey}&Query=${keyword}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20070901`
   
    // useEffect(() => {
    //     const searchData = async () => {
    //         try {
    //             const res = await axios.get(searchApi)
    //             setIsLoading(true)
    //             console.log(res.data.item)
    //             setError(null)
    //             setSearchBooks(res.data.item)
    //         } catch (e) {
    //             setError(e)
    //         }
    //         setIsLoading(false)
    //     }
    //     searchData()
    // }, [keyword])

    

    useEffect(() => {
        axios.get(searchApi)
            .then(res => {
                setSearchBooks(res.data.item)
                setIsLoading(false)
                setError('')
            })
            .then(response => {
                var xml = new XMLParser().parseFromString(response)
                console.log(xml)
            })
            .catch ( e => {
                setSearchBooks([])
                setIsLoading(false)
                setError('Something went wrong')
                console.log(e)
            })
    }, [keyword])
    

    const searching = keyword => {
        setkeyword(keyword)
    }
    console.log(searchBooks)
    return (
        <div>
            <h2>책 검색하기</h2>
            <SearchBookInput searching={searching}/>
            {/* {
                isLoading && searchBooks.length === 0 && (<h1>No Data Fount</h1>) 
            } */}
            {
                searchBooks && !isLoading && <SearchBookCont searchBooks={searchBooks}/>
            }
            {
                error ? error : null 
            }
        </div>
    );
};

export default SearchBookMain;