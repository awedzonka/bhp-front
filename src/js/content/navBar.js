import React from "react";
import {Link} from "react-router-dom";


const NavBar = () => {

    return (
        <>
            <ul className="navBarList">
                <li><Link to="/">Start testu</Link></li>
                <li><Link to="/registration">Rejestracja</Link></li>
                <li><Link to="/">Logowanie</Link></li>
            </ul>
        </>
    )
}
export default NavBar;

