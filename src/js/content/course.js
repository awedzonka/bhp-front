import React, {useEffect, useState} from "react";
import Header from "./header.js";
import Navigation from "../burgerMenu/navigation.js";
import Content from "./content.js";


const Course = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)

    useEffect(() => {
    }, []);

        return (
            <>
                <Header/>
                <Navigation/>
                <Content
                    response={generalResponse}
                />
            </>
        )
}


export default Course;