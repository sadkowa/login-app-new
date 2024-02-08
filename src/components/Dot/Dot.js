import React from "react";
import StyledDot from "./Dot.styled";

const Dot = ({ active, onClick }) => {
    
    return <StyledDot
        $active={active}
        disabled={active}
        onClick={onClick} />
}

export default Dot