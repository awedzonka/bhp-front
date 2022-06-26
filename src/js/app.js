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
