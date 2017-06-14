import React, { Component } from 'react';
import Favori from './Favori.js'
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
import scrollToElement from 'scroll-to-element'

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, left: '20px', zIndex: '999' }}
      onClick={onClick}
    ></div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, right: '20px', zIndex: '999' }}
      onClick={onClick}
    ></div>
  );
}

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    this.afterChange()
  }

  afterChange() {
    // If autoplay is working we reset timeout and it will never end up inside.
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      // This will start play again, important here is to have a timeout that exceeds your "autoplaySpeed".
      this.slider.innerSlider.play();
    }, 3200);
  }

  addOffset(event) {
    var el = event.target
    scrollToElement(el.getAttribute('href'), {
      offset: -40
    });
  }

  keepLocation() {
    var st, oldOffset = window.pageYOffset;
    if (window.pageYOffset != null ||document.body.scrollWidth != null) {
      st = oldOffset;
    }
    setTimeout(function(){window.scrollTo(0,st)}, 10);
  }

  render() {
    var settings = {
      arrows: true,
      infinite: true,
      dots: false,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      afterChange: this.afterChange.bind(this)
    };
    return (
      <div>
        <div id="popup1" className="overlay">
          <div className="popup lineDiag-wrapperRight">
            <div className="lineDiag-contentRight">
              <h2>Infos</h2>
              <a className="close" href="#" onClick={this.keepLocation.bind(this)}>&times;</a>
              <div className="content">
                Les valeurs moyennes sont calculées sur une période de 30 minutes.<br/><br/>
                Retrouvez plus de statistiques sur <a href="https://data.teampulse.ch/raam/map">https://data.teampulse.ch/raam/map</a>
              </div>
            </div>
          </div>
        </div>
        <div id="section-1" className="container">
          <SectionTitleDesktop right={1} top={116} className="lineDiag-2-wrapper" padding="15px 25px" bgColor="#fff" txtColor="#A6C222">
            <div className="lineDiag-2-content">A la une</div>
          </SectionTitleDesktop>
          <div className="row news">
            <div className="col-lg-12 justify-content-center news-media">
              <Favori loop={false} arrows={true} dots={false} forceLoop={true} />
            </div>
          </div>
        </div>
        <div id="section-2" className="map lineDiag-wrapperRight" >
          <SectionTitle txtColor="#fff" bgColor="#A6C222" padding="15px 25px">La carte</SectionTitle>
          <div className="container lineDiag-contentRight">
            <div className="stats-desktop-container">
              <div className="row">
                <a className="stats-info" href="#popup1"><img src="icon_info.svg" alt="Information sur les statistiques" /></a>
              </div>
              <div className="row">
                <div className="stat col-2"><SuperStat type="speed" displayFlex={false} descr="Vitesse moyenne" unit="km/h" /></div>
                <div className="stat col-2"><SuperStat type="rate" displayFlex={false} descr="Cadence moyenne" unit="rmp" /></div>
                <div className="stat col-2"><SuperStat type="time" displayFlex={false} descr="Heure locale" unit="hh:mm" /></div>
                <div className="stat col-2"><SuperStat type="alt" displayFlex={false} descr="Altitude" unit="m" /></div>
                <div className="stat col-2"><SuperStat type="temp" displayFlex={false} descr="Température extérieure" unit="°C" /></div>
                <div className="stat last col-2"><SuperStat type="power" displayFlex={false} descr="Puissance moyenne" unit="w" /></div>
              </div>
            </div>
            <GoogleMap height={400} zoom={5} />
            <div id="statsSlider" className="stats-mobile-container">
              <Slider ref={c => this.slider = c} {...settings}>
                <div><SuperStat type="speed" displayFlex={true} descr="Vitesse moyenne" unit="km/h" /></div>
                <div><SuperStat type="rate" displayFlex={true} descr="Cadence moyenne" unit="rmp" /></div>
                <div><SuperStat type="time" displayFlex={true} descr="Heure locale" unit="hh:mm" /></div>
                <div><SuperStat type="alt" displayFlex={true} descr="Altitude" unit="m" /></div>
                <div><SuperStat type="temp" displayFlex={true} descr="Température extérieure" unit="°C" /></div>
                <div><SuperStat type="power" displayFlex={true} descr="Puissance moyenne" unit="w" /></div>
              </Slider>
            </div>
            <SectionTitleDesktop left={-20} bottom={40} className="lineDiag-2-wrapper" padding="15px 25px" bgColor="#A6C222" txtColor="#fff">
              <div className="lineDiag-2-content">La carte</div>
            </SectionTitleDesktop>
          </div>
        </div>
        <div id="section-3" className="socials">
          <SectionTitle txtColor="#fff" bgColor="#A6C222" marginBottom="60px" padding="15px 25px">Les réseaux sociaux</SectionTitle>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 push-lg-6 insta">
                <div className="insta-container">
                  <Instagram postsWidth="320" autoPlay={true} arrows={false} dots={true} />
                </div>
              </div>
              <div className="col-12 col-lg-6 pull-lg-6 facebook">
                <div className="facebook-container">
                  <Facebook postsWidth="320" autoPlay={true} arrows={false} dots={true} forceLoop={true} />
                </div>
              </div>
            </div>
            <SectionTitleDesktop id="reseaux-sociaux" right={90} bottom={"auto"} className="lineDiag-2-wrapper reseaux-sociaux" padding="15px 25px" bgColor="#A6C222" txtColor="#fff">
              <div className="lineDiag-2-content">Les réseaux sociaux</div>
            </SectionTitleDesktop>
          </div>
        </div>
        <div id="fp-nav">
          <Scrollspy items={['section-1', 'section-2', 'section-3']} currentClassName="active" offset={-400}>
            <li><a href="#section-1" onClick={this.addOffset.bind(this)}></a></li>
            <li><a href="#section-2" onClick={this.addOffset.bind(this)}></a></li>
            <li><a href="#section-3" onClick={this.addOffset.bind(this)}></a></li>
          </Scrollspy>
        </div>
      </div >
    )
  }
}

export default Home;
