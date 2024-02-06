import React from "react";
import StyledHeader from "./Header.styled";

const Header = (props) => {

    return (
        <StyledHeader>
            <h1>{props.children}</h1>
        </StyledHeader>
    )

}

export default Header