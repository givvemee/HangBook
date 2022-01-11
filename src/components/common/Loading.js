import React from 'react';
import styled from 'styled-components';

const LoadingWrap = styled.div`
    width: 100%;
    height: 53vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LoadingTitle = styled.h3`
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    font-style: italic;
    color: ${props => props.theme.textColor};
`
const Loading = ({loadingTxt}) => {
    return (
        <LoadingWrap>
            <LoadingTitle>{loadingTxt}</LoadingTitle>
        </LoadingWrap>
    );
};

export default Loading;