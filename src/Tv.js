import React, { Component } from 'react';
import News from './News.js'
import Instagram from './Instagram.js'
import Facebook from './Facebook.js'
import GoogleMap from './GoogleMap.js'
//import SectionTitleDesktop from './SectionTitleDesktop.js'
//import SectionTitle from './SectionTitle.js'
//import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import { SuperStat } from './Numbers';
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
          <div className="col-2">
            <div className="insta-container">
              <Instagram postsWidth="320"/>
            </div>
            <div className="stats-container">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <SuperStat type="rate" displayFlex={false} descr="cadence moyenne" unit="rmp"/>
                  </div>
                  <div className="col-6">
                    <SuperStat type="speed" displayFlex={false} descr="Vitesse moyenne" unit="km/h"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <SuperStat type="power" displayFlex={false} descr="Puissance moyenne" unit=""/>
                  </div>
                  <div className="col-6">
                    <SuperStat type="rate" displayFlex={false} descr="Puissance moyenne" unit=""/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <SuperStat type="rate" displayFlex={false} descr="Puissance moyenne" unit=""/>
                  </div>
                  <div className="col-6">
                    <SuperStat type="rate" displayFlex={false} descr="Puissance moyenne" unit=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="facebook-container">
              <Facebook/>
            </div>
          </div>
        </div>
      </div>
  	)
  }
}

export default Tv;