import styled from "styled-components";

const StyledUserPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    animation-name: opacity;
    animation-duration: 3s;

    & h2 {
        margin: 20px 10px 30px;
        font-size: 1.8rem;
    }

    & h3 {
        font-size: 1.5rem;
        line-height: 2rem;
    }

    & p {
        color: green
    }

    & img {
        max-width: 70%;
        margin: 60px;

        @keyframes opacity {
            from {opacity: 0}
            to {opacity: 1}
        } 
    }
`

export default StyledUserPanel