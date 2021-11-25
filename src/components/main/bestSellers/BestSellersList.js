import React from 'react';

const BestSellersList = ({items}) => {
    const {title, author, cover, description, publisher} = items
    return (
        <div>
            <img src={cover} alt={title}/>
            <ul>
                <li>{title}</li>
                <li>{author}</li>
                <li>{publisher}</li>
                <li>{description}</li>
            </ul>
        </div>
    );
};

export default BestSellersList;