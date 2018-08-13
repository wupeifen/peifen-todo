import React, { Component } from "react";
import { 
    Route, 
    NavLink, 
    HashRouter
} from  "react-router-dom";

import Home from "./Home";
import About from "./About";
import Todo from "./Todo";


class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
            <ul className="header">
                <li><NavLink exact to ="/">Home</NavLink></li>
                <li><NavLink to ="/about">About</NavLink></li>
                <li><NavLink to="/todo">To Do</NavLink></li>
            </ul>

            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Todo" component={Todo}/>

            </div>
            </div>
        </HashRouter>
        );
    }
}

export default Main;