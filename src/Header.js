import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./css/Header.css";

function Header() {
    return (
        <div className="header">
            <h1>Joke Generator</h1>
            <div className="banner">
            <ul className="header__list">
                <li className="header__link">
                    <Link to="./General">General</Link>
                </li>
                <li className="header__link">
                    <Link to="./Knock">Knock-Knock</Link>
                </li>
                <li className="header__link">
                    <Link to="./Programming">Programming</Link>
                </li>
                <li className="header__link">
                    <Link to="./Random">Random</Link>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Header
