import React, {useEffect, useState} from "react";
import Header from "./header.js";
import Navigation from "../burgerMenu/navigation.js";
import LoginForm from "./loginForm.js";
import Footer from "./footer.js";
import UserLogOutLogIn from "./userLogOutLogIn";
import Content from "./content";
import {getCookie} from "../service/cookieService";
import {API_URL, LOGOUT_PATH} from "../service/consts";
import LoadingPage from "./loadingPage";

const LogOut = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)
    const [session, setSession] = useState({})

    useEffect(() => {
        document.cookie = "BHP_SID=; path=/;";
        fetch(API_URL + LOGOUT_PATH)
            .then(resp => resp.json())
            .then(data => {
                setGeneralResponse(data);
                setTimeout(() => {
                    setLoading(false)
                }, 500)
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
export default LogOut;