import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import './css/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__home">
        <h2> Want to hear a joke?</h2>
        <h2>Select a category above to begin! 😁</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
