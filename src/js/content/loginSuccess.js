import React, {useEffect, useState} from "react";
import Header from "./header.js";
import LoadingPage from "./loadingPage.js";
import Navigation from "../burgerMenu/navigation.js";
import Content from "./content.js";
import Footer from "./footer";
import {API_URL, APP_ORIGIN, APP_PATH_REGISTRATION_SUCCESS, REGISTRATION_US_PATH} from "../service/consts";
import {getCookie} from "../service/cookieService";


const LoginSuccess = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)
    const [name, setName] = useState("")

    useEffect(() => {

        // symulacja odpowiedzi backend z copy
        const content = {
            contentPage: {
                header: "Zalogowałeś się",
                content: [
                    "Teraz możesz wykonać test",
                    "Życzymy pozytywnych wyników testu :-)"
                ]
            }
        }
        setGeneralResponse(content);
        setTimeout(() => {
            setLoading(false)
        }, 500)

    }, []);

    useEffect(()=>{

        fetch("http://localhost:8030/getSessionData",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "BHP_SID": `${getCookie("BHP_SID")}`
                }
            })
            .then(resp => {
                return resp.json()
            })
            .then(json => {
                console.log(json);
                setName(json.firstName);
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
                <div>{name}</div>
                <Content
                    response={generalResponse}
                />
                <Footer/>
            </>
        )
    }
}

export default LoginSuccess;