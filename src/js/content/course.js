import React, {useEffect, useState} from "react";
import Header from "./header.js";
import Navigation from "../burgerMenu/navigation.js";
import CourseContent from "./courseContent.js";
import Footer from "./footer";
import {getCookie} from "../service/cookieService";
import UserLogOutLogIn from "./userLogOutLogIn";



const Course = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null);
    const [session, setSession] = useState({});

    // useEffect(() => {
    // }, []);
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
        return (
            <>
                <Header/>
                <Navigation/>
                <UserLogOutLogIn session={session}/>
                <CourseContent />
                <Footer/>
            </>
        )
}


export default Course;