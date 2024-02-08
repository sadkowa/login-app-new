import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    width: 80%;
    max-width: 400px;
    margin: 0 auto; 

    & section {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        gap: 20px;
    }

    & div {
        position: relative;
        display: flex;
        justify-content: center;
    }
`

export default StyledForm