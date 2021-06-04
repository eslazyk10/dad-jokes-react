import React from 'react';
import { Link } from "react-router-dom";


import "./css/Header.css";

function Header() {
    return (
        <div className="header">
            <h1>Joke Generator</h1>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__link">
                        <Link to="/General" style={{color: '#000', textDecoration:'none'}} >General</Link>
                    </li>

                    <li className="header__link">
                        <Link to="/Knock" style={{color: '#000', textDecoration:'none'}} >Knock-Knock</Link>
                    </li>

                    <li className="header__link">
                        <Link to="/Programming" style={{color: '#000', textDecoration:'none'}} >Programming</Link>
                    </li>

                    <li className="header__link">
                        <Link to="/Random" style={{color: '#000', textDecoration:'none'}} >Random</Link>
                    </li>
                </ul>
            </nav>
            <h4 className="header__homeLink">
                <Link to="/" style={ { color: '#000', textDecoration: 'none' } }>Back to Home</Link>
            </h4>
        </div>
    );
}

export default Header
