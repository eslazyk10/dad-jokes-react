import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import General from "./General";
import Knock from "./Knock";
import Programming from "./Programming";
import Random from "./Random";

import './css/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/General" component={ General } />
          <Route exact path="/Knock" component={ Knock } />
          <Route exact path="/Programming" component={ Programming } />
          <Route exact path="/Random" component={Random} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
