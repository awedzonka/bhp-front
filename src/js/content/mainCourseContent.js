import React, {useState, useEffect} from "react";

const MainCourseContent = () => {
    const [slideNumber, setSlideNumber] = useState(1)

    const changeNextSlide = () => {
        if (slideNumber >= 37) {
            return
        }
        setSlideNumber(prevState => prevState + 1)
    }

    const changePreviousSlide = () => {
        if (slideNumber <= 1) {
            return
        }
        setSlideNumber(prevState => prevState - 1)
    }

    return (

        <>
            <div className="mainContent">
                <h2> Slajd nr {slideNumber} </h2>
                <button onClick={changePreviousSlide}>poprzedni slajd</button>
                <button onClick={changeNextSlide}>następny slajd</button>
           <div>
               <img src={`../../images/slides/Slajd${slideNumber}.PNG`}/>
           </div>


            </div>

        </>

    )
}
export default MainCourseContent;