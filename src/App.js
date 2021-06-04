import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
          <Route path="/" component={ Home } />
          <Route path="/General" component={ General } />
          <Route path="/Knock" component={ Knock } />
          <Route path="/Programming" component={ Programming } />
          <Route path="/Random" component={Random} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
