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
            <div className="col-md-4 hidden-sm-down"></div>
            <div className="col-6 col-md-4 teampulse-logo"><img src="teampulse_160px.png" alt="Teampulse"/></div>
            <div className="col-6 col-md-4 race-logo"><img src="race_160px.png"  alt="Race Across America 17"/></div>
          </div>
        </div>
      </header>
      <aside className="primary-aside"></aside>

      <Route exact path="/" component={Home}/>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex col-4 col-lg-1 text-center logo-sponsor">
              <img className="img-fluid" src="sponsors/vaudh.png" />
            </div>
            <div className="d-flex col-4 col-lg-1 text-center logo-sponsor">
              <img className="img-fluid" src="sponsors/hesav.png" />
            </div>
            <div className="d-flex col-4 col-lg-1 text-center logo-sponsor">
              <img className="img-fluid" src="sponsors/heig.png" />
            </div>
            <div className="d-flex col-6 col-lg-1 text-center logo-sponsor">
             <img className="img-fluid" src="sponsors/chuv.png" />
            </div>
            <div className="d-flex col-6 col-lg-1 text-center logo-sponsor">
              <img className="img-fluid" src="sponsors/unil.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="visual-footer hidden-lg-up">
        <div className="container-fluid">
          
        </div>
      </div>


    </div>
  </Router>
)

export default BasicExample