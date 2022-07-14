import React from "react";
import NavBarContent from "./navBarContent.js";
import MainContentLogin from "./mainContentLogin.js";


const LoginForm = ({response}) => {


    return (
        <div className=" content">
            <MainContentLogin response={response}/>
            <NavBarContent/>
        </div>
    )
}
export default LoginForm;