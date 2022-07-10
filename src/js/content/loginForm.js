import React, {useEffect, useState} from "react";
import NavBarContent from "./navBarContent.js";
import MainContentLogin from "./mainContentLogin.js";


const LoginForm = ({response}) => {


    return (
        <>
            <MainContentLogin response={response}/>
            <NavBarContent/>
        </>
    )
}
export default LoginForm;