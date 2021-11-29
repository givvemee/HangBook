import React from 'react';
import SearchBookSub from './SearchBookSub';

const SearchBookCont = ({searchBooks}) => {
    return (
        <div>
            {
                searchBooks.map(books => <SearchBookSub key={books.isbn13} books={books}/>)
            }
        </div>
    );
};

export default SearchBookCont;