import React from "react";
import { StyledUserPage, StyledInfo, StyledWelcome, StyledImg } from "./UserPage.styled";
import img from "./../../assets/hello.png"

const UserPage = ({ fullName }) => {
    return (
        <StyledUserPage>
            <StyledInfo>You are logged in!</StyledInfo>
            {fullName && (
                <StyledWelcome>Welcome,
                    <p>{fullName}</p>
                </StyledWelcome>)}
            <StyledImg src={img} alt="hello" />
        </StyledUserPage>
    )
}


export default UserPage