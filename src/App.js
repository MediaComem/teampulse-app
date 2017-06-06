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
    <div className="footer lineDiag-wrapperLeft">
      <div className="container-fluid lineDiag-contentLeft">
        <div className="logos-sponsors">
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
    <div className="visual-footer hidden-lg-up">
      <div className="container-fluid">
        
      </div>
    </div>                                      
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