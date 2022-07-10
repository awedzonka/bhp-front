import React, {useState, useEffect} from "react";
import Header from "./header.js";
import Navigation from "../burgerMenu/navigation.js";
import LoadingPage from "./loadingPage.js";
import LoginForm from "./loginForm.js";
import Footer from "./footer.js";
import {API_URL, LOGIN_PATH} from "../service/consts.js";

const Login = () => {

    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)

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
                <LoginForm response={generalResponse}/>
                <Footer/>
            </>
        )
    }
}
export default Login;

