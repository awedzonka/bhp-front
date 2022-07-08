import React, {useEffect, useState} from "react";
import Header from "./header.js";
import LoadingPage from "./loadingPage.js";
import Navigation from "../burgerMenu/navigation.js";
import Content from "./content.js";
import {API_URL, REGISTRATION_SUCCESS} from "../service/consts.js";
import Footer from "./footer";


const RegistrationSuccess = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)

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
                <Content
                    response={generalResponse}
                />
                <Footer/>
            </>
        )
    }
}

export default RegistrationSuccess;