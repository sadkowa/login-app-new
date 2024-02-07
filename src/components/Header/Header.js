import React from "react";
import StyledHeader from "./Header.styled";

const Header = ({children}) => {
    
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
}

export default Header