import React from "react";
import StyledNavBar from "./NavBar.styled";

const NavBar = ({ children }) => {

    return (
        <StyledNavBar>
            {children}
        </StyledNavBar>
    )
}

export default NavBar