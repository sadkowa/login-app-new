import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    padding: 7px;
    border: 1px solid green;
    border-radius: 20px;
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: white;
    background-color: green;
    cursor: pointer;
    transition: 0.2s linear;

    &:hover {
        background-color: darkgreen;
    }
    &::first-letter {
        
    }
`

export default StyledButton