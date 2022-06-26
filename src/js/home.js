import React, {useEffect, useState} from "react";
import Navigation from "./burgerMenu/navigation.js";
import Content from "./content/content.js";
import {API_URL, HOME_PAGE_PATH} from "./service/consts.js";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)

    useEffect(() => {

        fetch(API_URL + HOME_PAGE_PATH)
            .then(resp => resp.json())
            .then(data => {setGeneralResponse(data); setLoading(false)})
            .catch(err => console.warn("error"));
    }, []);


    if (loading) {
        return (
            <>
                <h1> Wczytuje stronę</h1>
            </>
        )
    } else {
        return (
            <>
                <h1> szkolenie bhp</h1>
                <Navigation/>
                <Content
                    response={generalResponse}
                />
            </>
        )
    }
}


export default Home;