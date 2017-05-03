import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  browserHistory,
  Link
} from 'react-router-dom'
import Home from './Home.js'
import './App.css';

const Admin = () => (
  <div>
    <h2>Admin</h2>
  </div>
)


const BasicExample = () => (
  <Router>
    <div>
      <header className="primary-header row">
        <div className="col-md-4"></div>
        <div className="col-md-4">Teampulse</div>
        <div className="col-md-4">2017 <br/>race across<br/> America</div>
      </header>
      <aside className="primary-aside"></aside>

      <Route exact path="/" component={Home}/>
    </div>
  </Router>
)

export default BasicExample