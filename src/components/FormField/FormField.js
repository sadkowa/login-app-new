import React from "react";
import StyledFormField from "./FormField.styled";

const FormField = ({ children }) => {
    return (
        <StyledFormField>
            {children}
        </StyledFormField>
    )
}

export default FormField