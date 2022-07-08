import React, {useEffect, useState} from "react";
import LeftNav from "./leftNav.js";


const XNavigation = () => {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("red");
    const [topBurger, setTopBurger] = useState({rotation: "0deg", transformTranslate: "0"})
    const [meat, setMeat] = useState("none");
    const [bottomBurger, setBottomBurger] = useState({rotation: "0deg", transformTranslate: "0"})

    useEffect(() => {
        if (open) {
            setColor("#1c2d58");
            setTopBurger({rotation: "45deg", transformTranslate: "5px, 5px"})
            setMeat("none");
            setBottomBurger({rotation: "-45deg", transformTranslate: "0px, -4px"})

        } else {
            setColor("#505aa7")
            setTopBurger({rotation: "0deg", transformTranslate: "0"})
            setMeat("block");
            setBottomBurger({rotation: "0deg", transformTranslate: "0"})
        }


    }, [open]);
    return (
        <>
            <div onClick={() => setOpen(!open)} className="xNavigation">
                <div className={`xNavigationInside ${open ? "open" : "close"}`} />
                <div style={{backgroundColor: color, display: meat}} className="xNavigationInside"/>
                <div style={{
                    backgroundColor: color,
                    transform: `rotate(${bottomBurger.rotation}) translate(${bottomBurger.transformTranslate})`
                }} className="xNavigationInside"/>
            </div>
            <LeftNav open={open}/>
        </>
    )
}
export default XNavigation;