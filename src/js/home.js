import React, {useEffect, useState} from "react";
import Header from "./content/header.js";
import LoadingPage from "./content/loadingPage.js";
import Navigation from "./burgerMenu/navigation.js";
import Content from "./content/content.js";
import {API_URL, HOME_PAGE_PATH} from "./service/consts.js";
import Footer from "./content/footer";
import {getCookie} from "./service/cookieService";
import UserLogOutLogIn from "./content/userLogOutLogIn";


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null);
    const [session, setSession] = useState({})

    useEffect(() => {

        fetch(API_URL + HOME_PAGE_PATH)
            .then(resp => resp.json())
            .then(data => {
                setGeneralResponse(data);
                setTimeout(()=> { setLoading(false)}, 500)
            })
            .catch(err => console.warn("error"));
    }, []);
    useEffect(() => {

        fetch("http://localhost:8030/getSessionData",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    //ciasteczka są wysyłane w nagłówku request
                    "BHP_SID": `${getCookie("BHP_SID")}`
                }
            })
            .then(resp => {
                return resp.json()
            })
            .then(json => {
                console.log(json);
                setSession(json);
            })
            .catch(err => {
                console.warn(err)
            });

    }, [])


    if (loading) {
        return (
            <>
                <LoadingPage/>
            </>
        )
    } else {
        return (
            <>
                <Header/>
                <Navigation/>
                <UserLogOutLogIn session={session}/>
                <Content
                    response={generalResponse}
                />
                <Footer/>
            </>
        )
    }
}


export default Home;