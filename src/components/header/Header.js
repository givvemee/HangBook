import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { quotes } from '../common/Quotes';
import Nav from '../nav/Nav';
import ShowQuotes from './ShowQuotes';

const HeadWrap = styled.div`
    width: 80%;
    height: calc(100%- 200px);
    margin: 0 auto;
    background: #f4f4f6;
    border: 1px solid green;
`
const Head = styled.header`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat';
    border: 1px solid red;

`
const HeaderTitle = styled.h1`
    display: inline-block;
    font-size: 20px;
    text-align: center;
    padding: 0px;
    height: auto;
    span {
        font-style: italic;
        font-size: 24px;
        font-weight: bold;
    }
`
const Menu = styled.nav`
    width: 100%;
`
const Header = () => {
    
    return (
        <HeadWrap>
            <Head>
                <HeaderTitle>📚 <span>HangBook</span>,<br/> Hanging out with Books</HeaderTitle>
                <Menu>
                    <Nav />
                </Menu>
                <ShowQuotes />
            </Head>
        </HeadWrap>
    );
};

export default Header;