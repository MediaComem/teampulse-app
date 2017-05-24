import React, { Component } from 'react';
import News from './News.js'
import Instagram from './Instagram.js'
import Facebook from './Facebook.js'
import GoogleMap from './GoogleMap.js'
import SectionTitleDesktop from './SectionTitleDesktop.js'
import SectionTitle from './SectionTitle.js'
//import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Scrollspy from 'react-scrollspy'
import { SuperStat } from './Numbers';
import Slider from 'react-slick'
import './Home.css'

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, left: '20px', zIndex: '999',backgroundColor:'#ccc'}}
      onClick={onClick}
    ></div>
  );
}

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, right: '20px', zIndex: '999',backgroundColor:'#ccc'}}
      onClick={onClick}
    ></div>
  );
}

class Home extends Component {
  render() {
    var settings = {
      arrows: true,
      infinite: true,
      dots:true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };
    return (
      <div>
      	<div id="section-1" className="container">
          <SectionTitleDesktop right={1} bottom={50} padding="10px 20px" bgColor="#fff" txtColor="#A6C222">A la une</SectionTitleDesktop>
      		<div className="row news">
            <div className="col-md-2 justify-content-center hidden-sm-down">
              <p>Ne râtez aucun moment de la course grâce à notre programmation à la une!</p>
              <p>Suivez l’avancement de l’événement en live et découvrez les interviews des participants.</p>
            </div>
      			<div className="col-md-10 justify-content-center news-media">
      				<News/>
      			</div>
      		</div>
        </div>
        <div id="section-2" className="map">
          <SectionTitle txtColor="#fff" bgColor="#A6C222">La carte</SectionTitle>
          <div className="container">
            <div className="stats-desktop-container">
              <div className="row">
                <div className="stat col-2"><SuperStat type="speed" displayFlex={false} descr="Vitesse moyenne" unit="km/h"/></div>
                <div className="stat col-2"><SuperStat type="rate" displayFlex={false} descr="Cadence moyenne" unit="rmp"/></div>
                <div className="stat col-2"><SuperStat type="time" displayFlex={false} descr="Heure locale" unit="hh:mm"/></div>
                <div className="stat col-2"><SuperStat type="alt" displayFlex={false} descr="Altitude" unit="m"/></div>
                <div className="stat col-2"><SuperStat type="temp" displayFlex={false} descr="Température extérieure" unit="°C"/></div>
                <div className="stat last col-2"><SuperStat type="power" displayFlex={false} descr="Puissance moyenne" unit="watts"/></div>
              </div>
            </div>
            <GoogleMap />
            <div id="statsSlider" className="stats-mobile-container">
              <Slider {...settings}>
                <div><SuperStat type="speed" displayFlex={false} descr="Vitesse moyenne" unit="km/h"/></div>
                <div><SuperStat type="rate" displayFlex={false} descr="Cadence moyenne" unit="rmp"/></div>
                <div><SuperStat type="power" displayFlex={true} descr="Puissance moyenne" unit=""/></div>
                <div><SuperStat type="time" displayFlex={false} descr="Heure locale" unit="hh:mm"/></div>
                <div><SuperStat type="alt" displayFlex={false} descr="Altitude" unit="m"/></div>
                <div><SuperStat type="temp" displayFlex={false} descr="Température extérieure" unit="°C"/></div>
                <div><SuperStat type="power" displayFlex={false} descr="Puissance moyenne" unit="watts"/></div>
              </Slider>
            </div>
            <SectionTitleDesktop left={-20} bottom={-40} padding="10px 20px" bgColor="#A6C222" txtColor="#fff">La carte</SectionTitleDesktop>
          </div>
        </div>
        <div id="section-3" className="socials">
          <SectionTitle txtColor="#fff" bgColor="#A6C222">Les réseaux sociaux</SectionTitle>
          <div className="container">
        		<div className="row">
              <div className="col-12 col-lg-6 push-lg-6 insta">
                <div className="insta-container">
                  <Instagram postsWidth="320" autoPlay={false} arrows={true} dots={false}/>
                </div>
              </div>
              <div className="col-12 col-lg-6 pull-lg-6 facebook">
                <div className="facebook-container">
                  <Facebook postsWidth="320" autoPlay={false} arrows={true} dots={false}/>
                </div>
              </div>
      			</div>
            <SectionTitleDesktop right={90} bottom={180} padding="10px 20px" bgColor="#A6C222" txtColor="#fff">Les réseaux sociaux</SectionTitleDesktop>
    		  </div>
        </div>
        <div id="fp-nav">
          <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="active" offset={-70}>
            <li><a href="#section-1"></a></li>
            <li><a href="#section-2"></a></li>
            <li><a href="#section-3"></a></li>
          </Scrollspy>
        </div>
      </div>
  	)
  }
}

export default Home;