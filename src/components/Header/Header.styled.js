import styled from "styled-components";

const StyledHeader = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #22272E;

    & h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin: 10px;
        text-transform: uppercase;
        font-family: 'Protest Revolution', sans-serif;
    }

    @media (min-width: 700px) {
        display: block;
    }
`

export default StyledHeader