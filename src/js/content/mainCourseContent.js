import React, {useState} from "react";

const MainCourseContent = () => {
    const [slideNumber, setSlideNumber] = useState(1);

    const changeNextSlide = () => {
        if (slideNumber >= 37) {
            return
        }
        setSlideNumber(prevState => {
            return parseInt(prevState) + 1
        })

        document.querySelector("#slideNumber").value = parseInt(slideNumber) + 1;
    }

    const changePreviousSlide = () => {
        if (slideNumber <= 1) {
            return
        }
        setSlideNumber(prevState => parseInt(prevState) - 1)

        document.querySelector("#slideNumber").value = parseInt(slideNumber) - 1;
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
                <div className="chooseExactSlideStyle">
                    <h2> Slajd nr {slideNumber} </h2>
                    <input type="number" name="number" defaultValue="1" min="1" max="37" id="slideNumber"/> <p>/37</p>
                    <button type="submit" onClick={chooseExactSlide}> wczytaj slajd</button>

                </div>
                <div className="changeSlideButtons">
                    <button onClick={changePreviousSlide}>poprzedni slajd</button>
                    <button onClick={changeNextSlide}>następny slajd</button>
                </div>
                <div className="slaidView">
                    {/*<img src={`../../images/slides/Slajd${slideNumber}.PNG`}/>*/}
                    <img src={`/var/www/front-bhp/src/images/slides/Slajd${slideNumber}.PNG`}/>
                </div>
            </div>
        </>
    )
}
export default MainCourseContent;
