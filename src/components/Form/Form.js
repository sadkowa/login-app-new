import React from "react";
import StyledForm from "./Form.styled";

const Form = ({children, onSubmit, onKeyDown}) => {

    return (
        <StyledForm
            onSubmit={onSubmit}
            onKeyDown={onKeyDown}>
            {children}
        </StyledForm>
    )
}

export default Form