import React from 'react';

const BestSellersList = ({items}) => {
    const {title, author, cover, description, publisher} = items
    return (
        <div>
            <img src={cover} alt={title}/>
            <ul>
                <li>{title}</li>
            </ul>
        </div>
    );
};

export default BestSellersList;