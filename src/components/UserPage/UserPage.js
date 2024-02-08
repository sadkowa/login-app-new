import React from "react";
import StyledUserPage from "./UserPage.styled";

const UserPage = ({ children }) => {
    return (
        <StyledUserPage>{children}</StyledUserPage>
    )
}


export default UserPage