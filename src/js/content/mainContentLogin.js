import React, {useState} from "react";
import {API_URL, APP_ORIGIN, APP_PATH_LOGIN_SUCCESS, LOGIN_PATH} from "../service/consts";

const MainContentLogin = ({response}) => {
    //obiekt przechowujący value z input
    const [loginForm, setLoginForm] = useState({});
    //obiekt odpowiedzi po wysłaniu formularza
    const [loginData, setLoginData] = useState({});


    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    };

    const logIn = (e) => {
        e.preventDefault();
        // console.log(form);
        // 1.Wysyłamy pola formularza do bhp-backend
        fetch(API_URL + LOGIN_PATH,
            {
                method: "POST",
                body: JSON.stringify(loginForm),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            // 2.Otrzymaną odpowiedź z bhp-backend w formie tekstowej zamieniamy na JSON-a
            .then(resp => {
                return resp.json()
            })

            // 3.W JSON-ie sprawdzamy status logowania
            .then(json => {
                console.log(json);
                // Jeżeli odpowiedź to 200, to konto zostało zarejestrowane
                if (json.customer.logging.statusLogging === 200) {

                    // pobieramy sesyjne ciasteczko
                    document.cookie = `${json.customer.cookieSession.key}=${json.customer.cookieSession.value}; path=/`;

                    // wysylamy na stronę po logowaniu
                    window.location = APP_ORIGIN + APP_PATH_LOGIN_SUCCESS;

                } else {
                    // Jeżeli odpowiedź to nie 200, to zapisujemy odpowiedź do stanu w celu wyświetlenia błędów walidacji
                    setLoginData(json);
                }
            })

            .catch(err => {
                console.warn(err)
            });
    }

    const getGeneralValidationInfo = () => {
        let text = loginData?.customer?.logging?.generalErrorMessage;
        return <span style={{color: "red"}}>{text}</span>
    }

    return (
        <>
            <div className="mainContent">
                <div>{console.log(loginForm)}</div>
                <h1> Logowanie</h1>
                <div>{getGeneralValidationInfo()}</div>
                <form className="loginFormStyle">
                    <div>
                        <div><label className="labelStyle" htmlFor="loginId"> Podaj login</label></div>
                        <div><input className="inputStyle" type="text" id="loginId" name="login" defaultValue=""
                                    onChange={handleChange}/></div>
                    </div>
                    <div>
                        <div><label className="labelStyle" htmlFor="passwordId"> Podaj hasło</label></div>
                        <div><input className="inputStyle" type="password" id="passwordId" name="password"
                                    defaultValue="" onChange={handleChange}/></div>
                    </div>
                    <div>
                    <button className= "loginBtn" type="submit" onClick={logIn}> Zaloguj się</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default MainContentLogin;