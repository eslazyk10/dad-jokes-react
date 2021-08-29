import React, {useState} from 'react'
import Footer from './Footer';
import Header from './Header';
import axios from "axios";
import { Link } from "react-router-dom";

import "./css/Joke.css";
function Programming() {
    const [ count, setCount ] = useState('');
    const [ joke, setJoke ] = useState('Programmer joke: !false');
    const [ punchline, setPunchline ] = useState('Its funny because its true.');
    const [ reveal, setReveal ] = useState('');

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/joke/type/programming',
  headers: {
    'x-rapidapi-key': '71a33360f6mshf7992b774b0f347p18aedfjsnebef70c66ba8',
    'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
  }
};
  
const max= (17);
    function getRandomNum() {
        setCount(Math.floor(Math.random() * (max + 1)))
    }

    axios.request(options).then(function (response) {
        console.log(response.data);
        //console.log(response.data.body[ count ].setup);
        setJoke(response.data.body[ count ].setup);
        //console.log(response.data.body[ count ].punchline);
        setPunchline(response.data.body[ count ].punchline);
}).catch(function(error) {
	console.error(error);
});
    
     function revealJoke() {
        setReveal(
            <div>
                <div className="row">
                    <div className="col jokeSetUp">
                        <h3>Q: "{ joke }"</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col jokePunchline">
                        <h3>A: "{ punchline }"</h3>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="general">
            <Header />
            <section className="general__start">
                <h2>
                    Laughter is the best medicine!
                    <br />
                    Click here for your daily dose 😄
                </h2>
                <button className="revealButton" onClick={ () => {
                    getRandomNum();
                    revealJoke();
                } }>Reveal Jokes</button>
            </section>
            <section className="general__joke">
                {reveal}
            </section>
            <button className="home_button">
                <Link to="/" style={ { color: '#021419', textDecoration: 'none',  backgroundColor: "whitesmoke" } }>Back to Home</Link>
            </button>
            <Footer />
        </div>
    )
}

export default Programming
