
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const navList = [
    {id: 1, tap: 'Main', path: '/'},
    {id: 2, tap: 'Best Sellers', path: '/bestSellers'},
    {id: 3, tap: 'Search Books', path: '/searchBooks'},
    {id: 4, tap: "Today's Book", path: '/todays'}
]

const NavCont = styled.nav`
    
`
const MenuListWrap = styled.ul`
    display: flex;
    justify-content: space-between;
`
const MenuList = styled.li`
    float: left;
    margin: 0 10px;
`
const Nav = () => {
    return (
        <>
            <nav>
                <MenuListWrap>
                    {
                        navList.map((item, index) => <MenuList key={index}><Link to={item.path}>{item.tap}</Link></MenuList>)
                    }
                </MenuListWrap>
                
            </nav> 
        </>
    );
};

export default Nav;