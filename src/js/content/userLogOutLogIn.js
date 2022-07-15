import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const UserLogOutLogIn =({session})=>{

if(!session.firstName) {
    return  (
        <div className="userLogOutLogInStyle">

            <span>Witaj użytkowniku  |   </span>
            <Link to="/login">Logowanie</Link>
        </div>
    )
}
else {
    return (
        <div className="userLogOutLogInStyle">

            <span> {session.firstName}  |   </span>
            <Link to="/login">Wyloguj</Link>
        </div>

    )
}



}
export default UserLogOutLogIn;