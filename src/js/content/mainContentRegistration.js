import React, {useState} from "react";
import {
    API_URL,
    APP_ORIGIN,
    APP_PATH_REGISTRATION_SUCCESS,
    REGISTRATION_US_PATH
} from "../service/consts";

const MainContentRegistration = ({response}) => {

    // form - obiekt reprezentujący pola formularza
    const [form, setForm] = useState({});

    // Odpowiedź serwera po przesłaniu formularza
    const [registrationData, setRegistrationData] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const sendForm = (e) => {
        e.preventDefault();
        console.log(form);

        // 1.Wysyłamy pola formularza do bhp-backend
        fetch(API_URL + REGISTRATION_US_PATH,
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

            // 3.W JSON-ie sprawdzamy status rejestracji
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

    const validationInfo = (element)=> {
        element.validationMessage= registrationData?.customer?.registration?.mapErrors?.[element.name]
        return <span style={{color: "red"}}>{element.validationMessage}</span>
    }

    const getGeneralValidationInfo = () =>  {
        let text = registrationData?.customer?.registration?.generalErrorMessage;
        return <span style={{color: "red"}}>{text}</span>
    }

    return (
        <div className="mainContentRegistration mainContent">
            <h1>{response.contentPage.header}</h1>
            <form>
                <div>{getGeneralValidationInfo()}</div>
                <div className="formStyle"> {response.registrationFormFields.inputTextList.map(el => {
                    return (
                        <div key={el.id}>
                            <div>
                                <label htmlFor={el.id} className="labelStyle">{el.label}</label>
                            </div>
                            <div>
                                <input className="inputStyle" id={el.id} name={el.name} type={el.type}
                                       defaultValue={el.value} autoComplete={el.name} onChange={handleChange}/>
                            </div>
                            <div>{validationInfo(el)}</div>
                        </div>
                    )
                })}
                    <button type="submit" onClick={sendForm}>Zarejestruj się</button>
                </div>
            </form>
        </div>
    )
}

export default MainContentRegistration;