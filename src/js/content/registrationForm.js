import React from "react";
import NavBarContent from "./navBarContent.js";
import MainContentRegistration from "./mainContentRegistration.js";


const RegistrationForm = ({response}) => {
    return (

        <div className="content">
            <MainContentRegistration response={response}/>
            <NavBarContent/>

        </div>


    )
}
export default RegistrationForm;