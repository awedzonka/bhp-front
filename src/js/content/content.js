import React, {useEffect} from "react";
import MainContent from "./mainContent.js";
import NavBarContent from "./navBarContent.js";


const Content = ({response}) => {

    return (
        <div className= "content">
            <MainContent response={response}/>
            <NavBarContent/>

        </div>
    )
}
export default Content;