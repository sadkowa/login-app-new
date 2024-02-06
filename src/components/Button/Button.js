import React from "react";
import StyledButton from "./Button.styled";

const Button = ({ children, onClick }) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}


export default Button