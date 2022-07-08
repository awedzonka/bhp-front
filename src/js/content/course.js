import React, {useEffect, useState} from "react";
import Header from "./header.js";
import Navigation from "../burgerMenu/navigation.js";
import CourseContent from "./courseContent.js";


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
            </>
        )
}


export default Course;