import React from "react";
import StyledSubmitInput from "./SubmitInput.styled";

const SubmitInput = ({ type, value }) => {
    return (
        <StyledSubmitInput type={type} value={value} />
    )
}


export default SubmitInput