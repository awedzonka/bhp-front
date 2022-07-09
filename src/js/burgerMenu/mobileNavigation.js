import React from "react";
import {Link} from "react-router-dom";


const MobileNavigation = ({openMenu, switchOpenFunction}) => {


    const switchOpenMenu = (e) => {
        console.log(e.currentTarget.parentElement.classList.toggle("navBarListClose"));
        switchOpenFunction(!openMenu);
    }

    return (
        <>
            <ul
                className={`navBarList   ${openMenu ? "" : "navBarListClose"}`}
            >
                <li onClick={switchOpenMenu}><Link to="/">strona główna</Link></li>
                <li onClick={switchOpenMenu}><Link to="/course"> materiały szkoleniowe </Link></li>
                <li onClick={switchOpenMenu}><Link to="/registration">Rejestracja</Link></li>
                <li onClick={switchOpenMenu}><Link to="/course"> materiały szkoleniowe </Link></li>
                <li onClick={switchOpenMenu}><Link to="/contact">kontakt</Link></li>
            </ul>
        </>
    )
}
export default MobileNavigation;
