
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";

const navList = [
    {id: 1, tap: 'Main', path: '/'},
    {id: 2, tap: 'Best Sellers', path: '/bestSellers'},
    {id: 3, tap: 'Search Books', path: '/searchBooks'},
    {id: 4, tap: "Today's Book", path: '/todays'}
]

const NavCont = styled.nav`
    width: 100%;
    border: 1px solid blue;
`
const MenuListWrap = styled.ul`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
`
const MenuList = styled.li`
    /* float: left; */
    /* margin: 0 10px; */
    height: 80px;
    a {
        color: #2e2e2e;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
    }
    
`
const Nav = () => {
    return (
        <NavCont>
            <nav>
                <MenuListWrap>
                    {
                        navList.map((item, index) => 
                            <MenuList key={index}>
                                <Link to={item.path}>
                                    <p>{item.tap}</p>
                                    <IoIosArrowForward/>
                                </Link>
                            </MenuList>
                        )
                    }
                </MenuListWrap>
                
            </nav> 
        </NavCont>
    );
};

export default Nav;