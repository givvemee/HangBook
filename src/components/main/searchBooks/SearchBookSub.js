import React from 'react';

const SearchBookSub = ({books}) => {
    const {title, author, cover, description, publisher} = books
    return (
        <div>
            <img src={books.cover} alt={title}/>
            <ul>
                <li>{title}</li>
                <li>{author}</li>
                <li>{publisher}</li>
                <li>{description}</li>
            </ul>
        </div>
    );
};

export default SearchBookSub;