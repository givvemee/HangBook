import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';

const Head = styled.header`
    padding: 10px 5px;
    background: white;
    display: flex;
    justify-content: space-between;
`
const HeaderTitle = styled.h1`
    display: inline-block;
    font-size: 20px;
    text-align: right;
    span {
        font-style: italic;
        font-size: 30px;
        font-weight: bold;
    }
`
const Menu = styled.nav`
    width: 40%;
    background-color: pink;
`
const Header = () => {
    return (
        <Head>
            <HeaderTitle><span>HangBook</span>, Hanging out with Books</HeaderTitle>
            <Menu>
                <Nav />
            </Menu>
        </Head>
    );
};

export default Header;