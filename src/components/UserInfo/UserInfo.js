import React from "react";
import StyledUserInfo from "./UserInfo.styled";

const UserInfo = ({ fullName }) => {
    
    return (
        <StyledUserInfo>
            Signed as: <span>{fullName}</span>
        </StyledUserInfo>
    )
}

export default UserInfo