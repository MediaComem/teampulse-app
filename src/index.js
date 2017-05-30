import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-99848921-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
  <App onUpdate={logPageView} />,
  document.getElementById('root')
);
