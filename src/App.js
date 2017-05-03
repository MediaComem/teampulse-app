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
      <header className="primary-header">
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 teampulse-logo"><img src="teampulse_160px.png" width="289" height="50" alt="Teampulse"/></div>
        <div className="col-md-4 race-logo"><img src="race_160px.png" width="111" height="50" alt="Race Across America 17"/></div>
        </div>
        </div>
      </header>
      <aside className="primary-aside"></aside>

      <Route exact path="/" component={Home}/>
    </div>
  </Router>
)

export default BasicExample