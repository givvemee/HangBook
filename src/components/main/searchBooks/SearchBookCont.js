import React from 'react';
import SearchBookSub from './SearchBookSub';

const SearchBookCont = ({data}) => {
    return (
        <div>
            {
                data.map(books => <SearchBookSub key={books.isbn13} books={books}/>)
            }
        </div>
    );
};

export default SearchBookCont;