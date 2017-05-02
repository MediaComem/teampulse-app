import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home.js'

const Admin = () => (
  <div>
    <h2>Admin</h2>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/admin" component={Admin}/>
    </div>
  </Router>
)
export default BasicExample