import React, {useState, useEffect} from "react";
import {API_URL, APP_ORIGIN, APP_PATH_REGISTRATION_SUCCESS, LOGIN_PATH, REGISTRATION_US_PATH} from "../service/consts";

const MainContentLogin = ({response}) => {
const [loginForm, setLoginForm] = useState({});
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

const logIn =(e)=> {
        e.preventDefault();
        // console.log(form);
        // 1.Wysyłamy pola formularza do bhp-backend
        fetch(API_URL + LOGIN_PATH,
            {
                method: "POST",
                body: JSON.stringify(form),
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
                if (json.customer.registration.statusRegistration === 200) {

                    // wysylamy na stronę po logowaniu

                    window.location = APP_ORIGIN + APP_PATH_REGISTRATION_SUCCESS;

                } else {
                    // Jeżeli odpowiedź to nie 200, to zapisujemy odpowiedź do stanu w celu wyświetlenia błędów walidacji
                    setRegistrationData(json);
                }
            })

            .catch(err => {
                console.warn(err)
            });




}


    return (
        <>
            <form>
                <div>
                <label htmlFor={loginId}> Podaj login</label>
                <input type="text" id="loginId" name="login" defaultValue={loginForm} onChange={handleChange}/>
                <label htmlFor={passwordId}> Podaj hasło</label>
                <input type="password" id="passwordId" name="password" defaultValue={loginForm} onChange={handleChange}/>
                </div>
                <button type="submit" onClick={logIn}> Zaloguj się </button>

            </form>
        </>
    )
}
export default MainContentLogin;