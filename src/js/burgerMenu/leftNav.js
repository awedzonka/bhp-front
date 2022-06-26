import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  @media (max-width: 1200px) {
    transform: ${({open}) => open ? `translateX()` : `translateX(100%)`};
    transition: transform 0.3s linear;
`

const LeftNavigation = ({open}) => {
    // const [isHover, setIsHover] = useState({open})
    const [stateDisplay, setStateDisplay] = useState("none")

    useEffect(() => {
        if (open) {
            setStateDisplay("block")
        } else {
            setStateDisplay("none")
        }

        if (window.innerHeight > 1200) {
            setStateDisplay("block")
        }


    }, [open]);

    window.addEventListener('resize', function (e) {
        if (window.innerWidth > 1200) {
            setStateDisplay("flex")
        } else {
            setStateDisplay("none")
        }
        console.log()
    });
    return (
        <>

            <ul open={open} className="homeNav" style={{display: stateDisplay}}>
                <li><Link to="/">strona główna</Link></li>
                <li><Link to="/course/1"> materiały szkoleniowe </Link></li>
                <li><Link to="/registration"> rejestracja </Link></li>
                <li><Link to="/log"> logowanie </Link></li>
                <li><Link to="/contact">kontakt</Link></li>
            </ul>
        </>
    )
}
export default LeftNavigation;