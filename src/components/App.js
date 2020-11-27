import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>You are home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>You are on the about page</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h3>No match</h3>
    </div>
  );
}

export function LocationDisplay() {
  let location = useLocation();
  return (
    <div data-testid="location-display">
      <code>{location.pathname}</code>
    </div>
  );
}

export default App;
