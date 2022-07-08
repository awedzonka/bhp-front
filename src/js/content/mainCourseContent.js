import React, {useState} from "react";

const MainCourseContent = () => {
    const [slideNumber, setSlideNumber] = useState(1);

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

    const chooseExactSlide = (e) => {
        let requiredNumberSlide = e.target.parentElement.querySelector("#slideNumber").value;
        if (requiredNumberSlide >= 37) {
            requiredNumberSlide = 37
        }
        if (requiredNumberSlide <= 1) {
            requiredNumberSlide = 1
        }
        setSlideNumber(requiredNumberSlide);
        e.target.parentElement.querySelector("#slideNumber").value = requiredNumberSlide;
    }


    return (
        <>
            <div className="mainContent">
                {/*<input type="number" name="number" defaultValue={slideNumber} min="1" max="37" id="slideNumber" onChange={getSlideNumber} /> /37*/}
                <input type="number" name="number" defaultValue="1" min="1" max="37" id="slideNumber"/> /37
                <button type="submit" onClick={chooseExactSlide}> wczytaj slajd</button>
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