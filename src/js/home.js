import React from "react";
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <>

            <h1> szkolenie bhp</h1>
            <div className="xNavigation active">+</div>
            <ul className="homeNav">
                <li><Link to="/">strona główna</Link></li>
                <li><Link to="/course/1"> materiały szkoleniowe </Link></li>
                <li><Link to="/registration"> rejestracja </Link></li>
                <li><Link to="/log"> logowanie </Link></li>
                <li><Link to="/contact">kontakt</Link></li>
            </ul>
        </>
    )
}


export default Home;