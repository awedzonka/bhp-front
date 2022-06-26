import React from "react";
import Instruction from "./instruction.js";
import NavBar from "./navBar.js";

const NavBarContent=()=>{

    return(
        <div className="navBarContent">
            <Instruction/>
            <NavBar/>
        </div>
    )
}
export default NavBarContent;