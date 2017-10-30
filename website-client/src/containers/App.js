import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import WelcomeToReact from '../components/WelcomeToReact'
import NavBar from '../components/NavBar'

import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={WelcomeToReact} />
        </div>
      </Router>
    );
  }
}

export default App;
