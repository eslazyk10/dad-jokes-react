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
                        <button>
                            <Link to="/General" style={{color: '#000', textDecoration:'none'}} >General</Link>
                        </button>
                    </li>

                    <li className="header__link">
                        <button>
                            <Link to="/Knock" style={{color: '#000', textDecoration:'none'}} >Knock-Knock</Link>
                        </button>
                    </li>

                    <li className="header__link">
                        <button>
                            <Link to="/Programming" style={{color: '#000', textDecoration:'none'}} >Programming</Link>
                        </button>
                    </li>
                </ul>
            </nav>
            <button className="header__homeLink">
                <Link to="/" style={ { color: '#000', textDecoration: 'none' } }>Back to Home</Link>
            </button>
        </div>
    );
}

export default Header
