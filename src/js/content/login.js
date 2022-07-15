import React, {useState, useEffect} from "react";
import Header from "./header.js";
import Navigation from "../burgerMenu/navigation.js";
import LoadingPage from "./loadingPage.js";
import LoginForm from "./loginForm.js";
import Footer from "./footer.js";
import {API_URL, LOGIN_PATH} from "../service/consts.js";
import {getCookie} from "../service/cookieService";
import UserLogOutLogIn from "./userLogOutLogIn";

const Login = () => {

    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null);
    const [session, setSession] = useState({});

    useEffect(() => {
        fetch(API_URL + LOGIN_PATH)
            .then(resp => resp.json())
            .then(data => {
                setGeneralResponse(data);
                setTimeout(() => {
                    setLoading(false)
                }, 500)
                // setLoading(false)
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
                <LoginForm response={generalResponse}/>
                <Footer/>
            </>
        )
    }
}
export default Login;

