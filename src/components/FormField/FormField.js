import React from "react";
import StyledFormField from "./FormField.styled";

const FormField = ({ children, type }) => {
    return (
        <StyledFormField type={type}>
            {children}
        </StyledFormField>
    )
}

export default FormField