import React, {useEffect, useState} from "react";
import Header from "./header.js";
import Navigation from "../burgerMenu/navigation.js";
import RegistrationForm from "./registrationForm.js";
import {API_URL, REGISTRATION_US_PATH} from "../service/consts";
import LoadingPage from "./loadingPage";

const Registration = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)

    useEffect(() => {
        fetch(API_URL + REGISTRATION_US_PATH)
            .then(resp => resp.json())
            .then(data => {
                setGeneralResponse(data);
                setLoading(false)
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
                <RegistrationForm response={generalResponse}/>
            </>
        )
    }
}


export default Registration;
