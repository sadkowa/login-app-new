import styled from "styled-components";

const StyledNavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: 10px 30px 20px;
    gap: 20px;
    height: 100%;

    @media (min-width: 700px) {
        position: absolute;
        display: flex;
        align-items: center;
        width: 250px;
        margin: 0; 
        height: 100%;
        top: 0;
        right: 20px;
    }

    @media (min-width: 1200px) {
        margin-right: 50px;
    }
`

export default StyledNavBar