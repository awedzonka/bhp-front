import React, {Component} from 'react';
import ReactDOM from "react-dom";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink, BrowserRouter,
} from 'react-router-dom';


const Home = ()=> {
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

const About =() => {
    return (
        <>
            <h1>About</h1>
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
                    <Route path="/about" component={About}/>
                    <Route path="/shop" component={Shop}/>
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
