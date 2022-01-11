import React from 'react';
import styled from 'styled-components';

const ModeChange = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const ThemeChange = ({title, clickToModeChange}) => {
    return (
        <ModeChange onClick={clickToModeChange}>
            <span>{title}</span>
        </ModeChange>
    );
};


export default ThemeChange;