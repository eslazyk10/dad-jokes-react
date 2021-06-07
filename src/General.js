import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import axios from "axios";

function General() {

const [ count, setCount ] = useState('');
const [ joke, setJoke ] = useState('');
const [ punchline, setPunchline ] = useState('');

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/joke/type/general',
  headers: {
    'x-rapidapi-key': '71a33360f6mshf7992b774b0f347p18aedfjsnebef70c66ba8',
    'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
  }
};
  
const max= (343);
    function getRandomNum() {
        setCount(Math.floor(Math.random() * (max + 1)))
}

axios.request(options).then(function(response) {
    console.log(response.data.body[ count ].setup);
    setJoke(response.data.body[ count ].setup);
    console.log(response.data.body[ count ].punchline);
    setPunchline(response.data.body[ count ].punchline);
}).catch(function(error) {
	console.error(error);
});
    
    return (
        <div>
            <Header />
            <h2>
                Laughter is the best medicine!
                <br />
                Click here for your daily dose 😄
            </h2>
            <button onClick={ getRandomNum }>Wanna see something funny?</button>
            <h2>{ joke }</h2>
            <h3>{ punchline}</h3>
            <Footer />
        </div>
    )
}

export default General
