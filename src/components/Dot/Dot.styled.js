import styled from "styled-components";

const StyledDot = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid white;
    background-color: ${({ $active }) => (
        $active ? 'darkgreen' : 'transparent'
    )};
    cursor:pointer;
    
    &:disabled {
        cursor: auto;
    }
`

export default StyledDot