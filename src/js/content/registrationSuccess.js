import React, {useEffect, useState} from "react";
import Header from "./header.js";
import LoadingPage from "./loadingPage.js";
import Navigation from "../burgerMenu/navigation.js";
import Content from "./content.js";
import {API_URL, REGISTRATION_SUCCESS} from "../service/consts.js";
import Footer from "./footer";
import UserLogOutLogIn from "./userLogOutLogIn";
import {getCookie} from "../service/cookieService";


const RegistrationSuccess = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null);
    const [session, setSession] = useState({});


    useEffect(() => {

        fetch(API_URL + REGISTRATION_SUCCESS)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setGeneralResponse(data);
                setLoading(false)
            })
            .catch(err => console.warn(err));
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

export default RegistrationSuccess;