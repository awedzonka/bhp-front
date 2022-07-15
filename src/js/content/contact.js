import React, {useEffect, useState} from "react";
import Header from "./header";
import Content from "./content";
import Navigation from "../burgerMenu/navigation";
import {ABOUT_US_PATH, API_URL} from "../service/consts";
import LoadingPage from "./loadingPage";
import Footer from "./footer";
import UserLogOutLogIn from "./userLogOutLogIn";
import {getCookie} from "../service/cookieService";

const Contact = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null);
    const [session, setSession] = useState({})

    useEffect(() => {

        fetch(API_URL + ABOUT_US_PATH)
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
                <Content response={generalResponse}/>
                <Footer/>
            </>
        )
    }
}
export default Contact;