import styled from "styled-components";

const StyledUserPage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    opacity: 1;
`

const StyledInfo = styled.h2`
    margin: 20px 10px 30px;
    font-size: 1.8rem;
`        

const StyledWelcome = styled.h3`
    font-size: 1.5rem;
    line-height: 2rem;

    & p {
        color: green
    }
`

const StyledImg = styled.img`
    max-width: 70%;
    margin: 60px;
    animation-name: grow;
    animation-duration: 1s;
    @keyframes opacity {
        from {opacity: 0}
        to {opacity: 1}
    } 
    @keyframes grow {
        from {
            transform:scale(0) rotate(0);
            opacity: 0
        }
        to {
            transform:scale(1) rotate(360deg);
            opacity: 1
        }
    } 
`

export { StyledUserPage, StyledInfo, StyledWelcome, StyledImg }