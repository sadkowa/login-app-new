import React from "react";
import StyledUserPanel from "./UserPanel.styled";

const UserPanel = ({ children }) => {
    return (
        <StyledUserPanel>{children}</StyledUserPanel>
    )
}


export default UserPanel