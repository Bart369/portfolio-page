import React, { Component } from 'react'
import Nav from './components/Nav'
import Controller from './components/Controller'
import AboutMe from './components/AboutMe'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Nav /> */}
          {/* <Controller /> */}
          <Route path='/' render={props => (<Controller loadPage='1' />)} />
          <Route path='/portfolio' render={props => (<Controller loadPage='2' />)} />
          <Route path='/contact' render={props => (<Controller loadPage='3' />)} />
        </div>
      </Router>
    );
  }
}

export default App;
