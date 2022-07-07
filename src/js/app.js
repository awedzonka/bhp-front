import React from 'react';
import ReactDOM from "react-dom";
import Home from "./home";
import Contact from "./content/contact.js";
import Course from "./content/course.js";
import Registration from "./content/registration.js";
import RegistrationSuccess from "./content/registrationSuccess.js";
import "../sass/main.scss";


import {HashRouter, Route, Switch,} from 'react-router-dom';

const App = () => {
    return (
        <main>
            <HashRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/registration-success" component={RegistrationSuccess}/>
                    <Route path="/course" component={Course}/>
                </Switch>
            </HashRouter>
        </main>
    )
}


ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('app')
)
