import React, { Component } from 'react';
import News from './News.js';
import Instagram from './Instagram.js';
import Facebook from './Facebook.js';
import GoogleMap from './GoogleMap.js';
//import SectionTitleDesktop from './SectionTitleDesktop.js'
//import SectionTitle from './SectionTitle.js'
//import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import { SuperStat } from './Numbers';
import Slider from 'react-slick';
import './tv.css';

class Tv extends Component {
  render() {
	  var settings = {
      arrows: false,
      infinite: true,
      autoplay: true,
      dots:true,
      speed: 500,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
	    <div className="tv">
		    <header className="primary-header">
		      <div className="container-fluid">
		        <div className="row">
		          <div className="col-6 col-md-4 call-for-action"><p>suivez nos coureurs sur :</p><p className="strong">teampulse.ch</p></div>
		          <div className="col-6 col-md-4 teampulse-logo"><img src="teampulse_160px.png" alt="Teampulse"/></div>
		          <div className="col-6 col-md-4 race-logo"><img src="race_160px.png"  alt="Race Across America 17"/></div>
		        </div>
		      </div>
		    </header>
	      <div className="container-fluid">
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
	              <Instagram postsWidth="320" autoPlay={true} arrows={false} dots={true}/>
	            </div>
	            <div className="stats-container">
	              <div id="statsSlider" className="stats-tv-container">
									<Slider {...settings}>
										<div className="container">
			                <div className="row">
			                  <div className="col-4">
													<SuperStat type="speed" displayFlex={false} descr="Vitesse moyenne" unit="km/h"/>
			                  </div>
			                  <div className="col-4">
			                    <SuperStat type="rate" displayFlex={false} descr="Cadence moyenne" unit="rmp"/>
			                  </div>
			                  <div className="col-4">
			                    <SuperStat type="time" displayFlex={false} descr="Heure locale" unit="hh:mm"/>
			                  </div>
			                </div>
			              </div>
			              <div className="container">
			                <div className="row">
			                  <div className="col-4">
			                    <SuperStat type="alt" displayFlex={false} descr="Altitude" unit="m"/>
			                  </div>
			                  <div className="col-4">
			                    <SuperStat type="temp" displayFlex={false} descr="Température extérieure" unit="°C"/>
			                  </div>
			                  <div className="col-4">
			                    <SuperStat type="power" displayFlex={false} descr="Puissance moyenne" unit="watts"/>
			                  </div>
			                </div>
		                </div>
		              </Slider>
	              </div>
	            </div>
	          </div>
	          <div className="col-4">
	            <div className="facebook-container">
	              <Facebook autoPlay={true} arrows={false} dots={true} />
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
  	)
  }
}
              


export default Tv;