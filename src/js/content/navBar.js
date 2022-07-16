import React from "react";
import {Link} from "react-router-dom";


const NavBar = () => {

    return (
        <>
            <ul className="navBarListAside">
                <li><Link to="/">Start testu</Link></li>
                <li><Link to="/registration">Rejestracja</Link></li>
                <li><Link to="/login">Logowanie</Link></li>
            </ul>
        </>
    )
}
export default NavBar;

