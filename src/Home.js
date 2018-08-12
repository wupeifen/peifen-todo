import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
            <h1>Pei Fen Todo React App</h1>
            <ul className="header">
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/todo">To Do</a></li>
            </ul>

            <div className="content">


            </div>
            </div>
        );
    }
}

export default Home;