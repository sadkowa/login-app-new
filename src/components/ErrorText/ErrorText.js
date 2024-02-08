import React from "react";
import StyledErrorText from "./ErrorText.styled";

const ErrorText = ({ children }) => {
    
    return (
        <StyledErrorText>{children}</StyledErrorText>
    )
}

export default ErrorText