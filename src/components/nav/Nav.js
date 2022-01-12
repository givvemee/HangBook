
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
// import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";

const navList = [
    // {id: 1, tap: 'Main', path: '/'},
    {id: 1, tap: 'Best Sellers', path: '/'},
    {id: 2, tap: 'Search Books', path: '/searchBooks'},
    {id: 3, tap: "Today's Book", path: '/todays'},
    // {id: 1, tap: 'Menu1', path: '/'},
    // {id: 2, tap: 'Menu2', path: '/bestSellers'},
    // {id: 3, tap: 'Menu3', path: '/searchBooks'},
    // {id: 4, tap: "Menu4", path: '/todays'}
]

const NavCont = styled.nav`
    width: 100%;
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
`
const MenuListWrap = styled.ul`
    display: flex;
    flex-direction: column;
`
const MenuList = styled.li`
    height: 80px;

    a {
        color: #aaa;
        text-decoration: none;
        /* font-weight: bold; */
        font-size: 18px;
        line-height: 80px;
        display: flex;
        justify-content: space-between;
        border-bottom: #a5a5a5;
        & > svg {
            font-weight: bold;
            height: 80px;
        }
        &:focus {
            /* color: ${props => props.theme.txtFocus}; */
            font-weight: 900;
        }
    }
    
`
const Nav = () => {
    const location = useLocation();
    console.log(location.pathname);

    return ( 
        <NavCont>
            <nav>
                <MenuListWrap>
                    {
                        navList.map((item, index) => 
                            <MenuList key={index}>
                                <Link to={item.path}
                                    style={{
                                        color: `${location.pathname === item.path ? props => props.theme.txtFocus : "#aaa"}`,
                                        fontWeight: `${location.pathname === item.path ? "bold" : "normal"}`
                                    }}>
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