import React, { Component } from 'react';
import Favori from './Favori.js';
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
      dots:false,
      speed: 500,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    settingsLogos = {
	    arrows: false,
      infinite: true,
      speed: 500,
      dots: false,
      fade: true,
			autoplaySpeed: 3000,
      autoplay: true,
      slidesToShow: 1,
    };
    return (
	    <div className="tv">
		    <header className="primary-header">
		      <div className="container-fluid">
		        <div className="row">
		          <div className="col-4 col-md-4 call-for-action"><p>suivez nos coureurs sur :</p><p className="strong">live.teampulse.ch</p></div>
		          <div className="col-4 col-md-4 teampulse-logo"><img src="teampulse_160px.png" alt="Teampulse"/></div>
		          <div className="col-4 col-md-4 race-logo"><img className="right" src="race_160px.png"  alt="Race Across America 17"/></div>
		        </div>
		      </div>
		    </header>
	      <div id="first-section" className="container-fluid">
	        <div className="row">
	          <div className="col-5">
	            <div className="youtube-container">
								<Favori youtube loop={true} arrows={false} dots={false} imgHeight={415}/>
	            </div>
	            <div className="map-container">
	              <GoogleMap height={437} zoom={4} center={[38.195798, -98.918725]}/>
	            </div>
	          </div>
	          <div id="second-section" className="col-3">
	            <div className="insta-container">
	              <Instagram postsWidth="320" autoPlay={true} arrows={false} dots={false}/>
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
	          <div id="facebook-section" className="col-4">
	            <div className="facebook-container">
	              <Facebook autoPlay={true} arrows={false} dots={false} />
	            </div>
	            <div className="logos">
								<Slider {...settingsLogos}>
									<div className="logo">
							      <img src="/sponsors/chuv.png" alt="logos chuv"/>
							    </div>
							    <div className="logo">
										<img src="/sponsors/heig.png" alt="logos heig"/>
									</div>
							    <div className="logo">
										<img src="/sponsors/hesav.png" alt="logos hesav"/>
									</div>
							    <div className="logo">
										<img src="/sponsors/unil.png" alt="logos unil"/>
									</div>
							    <div className="logo">
										<img src="/sponsors/vaud.png" alt="logos vaud"/>
									</div>
								</Slider>
							</div>
	          </div>
	        </div>
	      </div>
	    </div>
  	)
  }
}



export default Tv;
