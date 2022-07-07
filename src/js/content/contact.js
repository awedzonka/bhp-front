import React, {useEffect, useState} from "react";
import Header from "./header";
import Content from "./content";
import Navigation from "../burgerMenu/navigation";
import {ABOUT_US_PATH, API_URL} from "../service/consts";
import LoadingPage from "./loadingPage";

const Contact = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)

    useEffect(() => {

        fetch(API_URL + ABOUT_US_PATH)
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
                <Content response={generalResponse}/>

            </>
        )
    }
}
export default Contact;