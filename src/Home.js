import React, { Component } from 'react';
import News from './News.js'
import Instagram from './Instagram.js'
import FacebookNew from './FacebookNew.js'
import Facebook from './Facebook.js'
import GoogleMap from './GoogleMap.js'
import Stats from './Stats.js'
import SectionTitle from './SectionTitle.js'
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
      	<div className="container">
        <FacebookProvider appId="269918776508696">
                          <EmbeddedPost href={"https://www.facebook.com/teampulse.ch/posts/1769795006666473"} width="auto" />
                        </FacebookProvider>
          <SectionTitle className="hidden-sm-down" text="Les réseaux sociaux" right={0} bottom={50} hiddenSm={true} padding="10px 20px" bgColor="#fff" txtColor="#A6C222">A la une</SectionTitle>
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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Stats />
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
        <div className="container socials">
      		<div className="row">
  	  			<div className="col-lg-6 facebook">
              <FacebookNew postsWidth="320"/>
  	  			</div>
            <div className="col-lg-6 insta">
              <Instagram postsWidth="320"/>
            </div>
    			</div>
          <SectionTitle text="Les réseaux sociaux" right={90} bottom={200} padding="10px 20px" bgColor="#A6C222" txtColor="#fff">Les réseaux sociaux</SectionTitle>
  		  </div>
      </div>
  	)
  }
}

export default Home;