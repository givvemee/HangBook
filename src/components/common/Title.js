
import styled from "styled-components";

const HeadTitle = styled.h2`
    width: 95%;
    margin: 0 auto;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
`
const Title = ({titleText}) => {

    return (
        <HeadTitle>{titleText}</HeadTitle>
    )
}

export default Title;
