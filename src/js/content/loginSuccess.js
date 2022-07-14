import React, {useEffect, useState} from "react";
import Header from "./header.js";
import LoadingPage from "./loadingPage.js";
import Navigation from "../burgerMenu/navigation.js";
import Content from "./content.js";
import Footer from "./footer";


const RegistrationSuccess = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)

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