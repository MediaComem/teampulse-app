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
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
      	<div className="container">
          <SectionTitleDesktop className="hidden-sm-down"right={0} bottom={50} hiddenSm={true} padding="10px 20px" bgColor="#fff" txtColor="#A6C222">A la une</SectionTitleDesktop>
      		<div className="row news">
            <div className="col-md-2 justify-content-center hidden-sm-down">
              <p>Ne râtez aucun moment de la course grâce à notre programmation à la une!</p>
              <p>Suivez l’avancement de l’événement en live et découvrez les interviews des participants.</p>
            </div>
      			<div className="col-md-10 justify-content-center news-media">
      				<News youtube/>
      			</div>
      		</div>
        </div>
        <div className="map">
          <SectionTitle txtColor="#fff" bgColor="#A6C222">La carte</SectionTitle>
          <div className="container">
            <GoogleMap />
            <Stats />
          </div>
        </div>
        <div className="socials">
          <SectionTitle txtColor="#fff" bgColor="#A6C222">Les réseaux sociaux</SectionTitle>
          <div className="container">
        		<div className="row">
              <div className="col-lg-6 insta">
                <Instagram postsWidth="320"/>
              </div>
    	  			<div className="col-lg-6 facebook">
                <FacebookNew postsWidth="320"/>
    	  			</div>
      			</div>
            <SectionTitleDesktop right={90} bottom={200} padding="10px 20px" bgColor="#A6C222" txtColor="#fff">Les réseaux sociaux</SectionTitleDesktop>
    		  </div>
        </div>
      </div>
  	)
  }
}

export default Home;