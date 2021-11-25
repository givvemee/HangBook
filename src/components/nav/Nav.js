
import React from 'react';
import { Link } from 'react-router-dom';

const navList = [
    {id: 1, tap: 'Main', path: '/'},
    {id: 2, tap: 'Best Sellers', path: '/bestSellers'},
    {id: 3, tap: 'Search Books', path: '/searchBooks'},
    {id: 4, tap: "Today's Book", path: '/todays'}
]
const Nav = () => {
    return (
        <>
            <nav style={{background: 'orange'}}>
                <ul>
                    {
                        navList.map((item, index) => <li key={index}><Link to={item.path}>{item.tap}</Link></li>)
                    }
                </ul>
                
            </nav> 
        </>
    );
};

export default Nav;