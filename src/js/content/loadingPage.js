import React from "react";
import {Audio, Triangle} from 'react-loader-spinner'


const LoadingPage = () => {
    return (
        <>
            <Triangle
                height="200"
                width="200"
                color="red"
                ariaLabel='loading'
            />
        </>
    )
}

export default LoadingPage;