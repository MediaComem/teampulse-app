import React, { Component } from 'react';
import News from './News.js'
import Instagram from './Instagram.js'
import FacebookNew from './FacebookNew.js'
import Facebook from './Facebook.js'
import GoogleMap from './GoogleMap.js'
import Stats from './Stats.js'
import SectionTitleDesktop from './SectionTitleDesktop.js'
import SectionTitle from './SectionTitle.js'
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import './tv.css'

class Tv extends Component {
  render() {
    return (
      <div className="container-fluid tv">
        <div className="row">
          <div className="col-5">
            <div className="youtube-container">
              <News youtube/>
            </div>
            <div className="map-container">
              <GoogleMap />
            </div>
          </div>
          <div className="col-3">
            <div className="insta-container">
              <Instagram postsWidth="320"/>
            </div>
            <div className="stats-container">
              <Stats />
            </div>
          </div>
          <div className="col-4">
          </div>
        </div>
      </div>
  	)
  }
}

export default Tv;