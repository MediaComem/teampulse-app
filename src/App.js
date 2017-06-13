import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
  //,IndexRoute,
  //browserHistory,
  //Link
} from 'react-router-dom'
import Home from './Home.js'
import Tv from './Tv.js'
import './App.css';
import { Socket } from 'react-socket-io';

const uri = 'https://teampulse.herokuapp.com';
const options = { transports: ['websocket'] };

const DefaultLayout = ({ children }) => (
  <div>
    <header className="primary-header lineDiag-wrapperRight">
      <div className="container-fluid lineDiag-contentRight">
        <div className="row">
          <div className="col-6 col-md-4 race-logo"><img src="race_160px.png"  alt="Race Across America 17"/></div>
          <div className="col-6 col-md-4 teampulse-logo"><img src="teampulse_160px.png" alt="Teampulse"/></div>
          <div className="col-md-4 hidden-sm-down"></div>
        </div>
      </div>
    </header>
    <aside className="primary-aside"></aside>
    {children}
    <footer class="">
      <div className="footer lineDiag-wrapperRight">
        <div className="container-fluid lineDiag-contentRight">
          <div className="row">
            <div className="social-links col-md-4 col-lg-3 col-12">
              <div className="social-links-container">
                <a href="https://www.facebook.com/search/top/?q=teampulse"><img src="/SVG/facebook-square.svg" type="image/svg+xml" alt="Facebook Teampulse" /></a>
                <a href="https://www.flickr.com/photos/150269572@N07/"><img src="/SVG/flickr.svg" type="image/svg+xml" alt="Flickr Teampulse" /></a>
                <a href="https://www.instagram.com/teampulse_raam17/"><img src="/SVG/instagram.svg" type="image/svg+xml" alt="Instagram Teampulse" /></a>
                <a href="https://www.youtube.com/channel/UCCg-nD4e4d-MwCBtFNPWBpA"><img src="/SVG/youtube-play.svg" type="image/svg+xml" alt="Youtube Teampulse" /></a>
              </div>
            </div>
            <div className="logos-sponsors col-md-8 col-lg-9 col-12">
              <div className="logo-sponsor">
                <img className="img-fluid" src="sponsors/hesav.png" alt="Logo Hesav" />
              </div>
              <div className="logo-sponsor">
                <img className="img-fluid heig" src="sponsors/heig.png" alt="Logo Heig-vd" />
              </div>
              <div className="logo-sponsor">
                <img className="img-fluid vaud" src="sponsors/vaud.png" alt="Logo du Canton de Vaud" />
              </div>
              <div className="logo-sponsor">
                <img className="img-fluid" src="sponsors/unil.png" alt="Logo Unil" />
              </div>
              <div className="logo-sponsor">
               <img className="img-fluid" src="sponsors/chuv.png" alt="Logo Chuv" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="visual-footer hidden-lg-up">
        <div className="container-fluid">
        </div>
      </div>
    </footer>
  </div>
);
const TvLayout = ({ children }) => (
  <div>
    {children}
  </div>
);


const BasicExample = () => (
  <Router>
    <Socket uri={uri} options={options}>
      <Switch>
        <Route exact path="/" render={() => <DefaultLayout><Home /></DefaultLayout>} />
        <Route exact path="/tv" render={() => <TvLayout><Tv /></TvLayout>} />
      </Switch>
    </Socket>
  </Router>
)

export default BasicExample
