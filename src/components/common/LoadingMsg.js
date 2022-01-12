
import styled from "styled-components";

const HeadTitle = styled.h2`
    width: 95%;
    margin: 0 auto;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
`
const LoadingMsg = ({loadingText}) => {

    return (
        <HeadTitle>{loadingText}</HeadTitle>
    )
}

export default LoadingMsg;
