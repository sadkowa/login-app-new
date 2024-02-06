import React from "react";
import StyledFormField from "./FormField.styled";

const FormField = ({ children, type, name, value, onChange, onBlur }) => {
    return (
        <StyledFormField
            value={value}
            type={type}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
        >
            {children}
        </StyledFormField>
    )
}

export default FormField