import React, { useState } from 'react';

const SearchBookInput = () => {
    const [keyword, setkeyword] = useState('apple')
    const apiKey = 'ttb201403672030001'
    const searchApi = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${apiKey}&Query=${keyword}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20070901`

    console.log(searchApi)
    return (
        <div>
            <h2>책 검색하기</h2>
            <div>
                <input type="text" />
            </div>
        </div>
    );
};

export default SearchBookInput;