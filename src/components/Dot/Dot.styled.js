import styled, { css } from "styled-components";

const StyledDot = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid white;
    background-color: ${({ $active }) => (
        $active ? 'darkgreen' : 'transparent'
    )};
`

export default StyledDot