import React from 'react';
import ReactDOM from "react-dom";
import Home from "./home";
import Contact from "./content/contact.js";
import Course from "./content/course.js";
import Login from "./content/login.js";
import LoginSuccess from "./content/loginSuccess.js";
import LogOut from "./content/logOut.js";
import Registration from "./content/registration.js";
import RegistrationSuccess from "./content/registrationSuccess.js";
import "../sass/main.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


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
                    <Route path="/login" component={Login}/>
                    <Route path="/login-success" component={LoginSuccess}/>
                    <Route path="/logout" component={LogOut}/>
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
