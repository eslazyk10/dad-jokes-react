import React from 'react';
import img from './images/dadjokes.png';
import Header from './Header';
import Footer from "./Footer";

import "./css/Joke.css";


function Home() {
    return (
        <div className="Home">
            <Header />
            <div className="home_main">
                <h2>Want to hear a joke?</h2>
            <h2>Select any of the categories above to get started!</h2>
            <img className="dadJokeImg img-fluid" src={ img } alt="Dad Joke"/>
            </div>
            <Footer />
        </div>
    )
}

export default Home
