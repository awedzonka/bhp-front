import React, {useEffect, useState} from "react";
import Header from "./header.js";
import Navigation from "../burgerMenu/navigation.js";
import CourseContent from "./courseContent.js";
import Footer from "./footer";


const Course = () => {
    const [loading, setLoading] = useState(true);
    const [generalResponse, setGeneralResponse] = useState(null)

    useEffect(() => {
    }, []);

        return (
            <>
                <Header/>
                <Navigation/>
                <CourseContent />
                <Footer/>
            </>
        )
}


export default Course;