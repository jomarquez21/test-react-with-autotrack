import React from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";

function Users() {
  return (
    <div>
      User component
    </div>
  )
}

function About() {
  return (
    <div>
      About component
    </div>
  )
}

function Home() {
  return (
    <div>
      Home component
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
