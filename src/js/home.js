import React, {useEffect, useState} from "react";
import Header from "./content/header.js";
import LoadingPage from "./content/loadingPage.js";
import Navigation from "./burgerMenu/navigation.js";
import Content from "./content/content.js";
import {API_URL, HOME_PAGE_PATH} from "./service/consts.js";
import Footer from "./content/footer";


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)

    useEffect(() => {

        fetch(API_URL + HOME_PAGE_PATH)
            .then(resp => resp.json())
            .then(data => {
                setGeneralResponse(data);
                setTimeout(()=> { setLoading(false)}, 500)
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
                <Content
                    response={generalResponse}
                />
                <Footer/>
            </>
        )
    }
}


export default Home;