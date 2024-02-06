import React from "react";
import StyledForm from "./Form.styled";

const Form = ({children}) => {

    return (
        <StyledForm>
            {children}
        </StyledForm>
    )
}

export default Form