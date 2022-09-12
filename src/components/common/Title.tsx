import styled from "styled-components";

const HeadTitle = styled.h2`
    width: 95%;
    margin: 0 auto;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    color: ${props => props.theme.textColor};
`

type Titles = {
    titleText: string
}
const Title = ({titleText}: Titles) => {

    return (
        <HeadTitle>{titleText}</HeadTitle>
    )
}

export default Title;
