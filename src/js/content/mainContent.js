import React from "react";


const MainContent = ({response}) => {

    return (
        <div className="mainContent">
            <h1 className="mainContentHeader">{response.contentPage.header}</h1>
            <div className={"mainContentInvitation"}>{response.contentPage.content.map(el => {
                return <p key={el}>{el}</p>
            })}</div>
        </div>
    )
}
export default MainContent;