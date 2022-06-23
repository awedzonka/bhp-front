import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Home from "./home";

import "../sass/main.scss";


import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink, BrowserRouter,
} from 'react-router-dom';



const About =() => {
    return (
        <>
            <h1>Kontakt</h1>
        </>
    )
}

const Shop = () => {
    return (
        <>
            <h1>Shop</h1>
        </>
    )
}

const App = () => {
    return (
        <main>
            <HashRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    {/*<Route path="/course" component={Course}/>*/}
                    {/*<Route path="/registation" component={Registration}/>*/}
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
