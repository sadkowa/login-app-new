import React from "react";
import StyledButton from "./Button.styled";

const Button = ({ children, onClick }) => {
    // console.log(children)
    return (
        <StyledButton
            onClick={onClick}
            name={children}>
            {children}
        </StyledButton>
    )
}


export default Button