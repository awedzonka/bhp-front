import React from "react";
// import loadingPage from "./loadingPage";


const MainContentRegistration = ({response}) => {


    return (
        <div className="mainContentRegistration mainContent">
            <h1>{response.contentPage.header}</h1>
            <form>

                <div className="formStyle"> {response.registrationFormFields.inputTextList.map(el => {

                    return (
                        <div key={el.id}>
                            <div>
                                <label htmlFor={el.id} className="labelStyle">{el.label}</label>
                            </div>
                            <div>
                                <input className="inputStyle" id={el.id} name={el.name} type={el.type} defaultValue={el.value} autoComplete={el.name}/>
                                {/*<input className="inputStyle" id={el.id} name={el.name} type={el.type} defaultValue={el.value} />*/}
                                {/*<input className="inputStyle" id={el.id} name={el.name} type={el.type} value={el.value} onChange={e => setName(e.target.value)}/>*/}
                            </div>
                        </div>
                    )
                })}
                    <button type="submit">Zarejestruj się</button>
                </div>
            </form>
        </div>
    )
}

export default MainContentRegistration;