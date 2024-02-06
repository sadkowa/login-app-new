import React from "react";
import StyledError from "./Error.styled";

const Error = ({ children }) => {
    return (
        <StyledError>{children}</StyledError>
    )
}


export default Error