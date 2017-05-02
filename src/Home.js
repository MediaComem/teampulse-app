import React, { Component } from 'react';
import News from './News.js'
import Instagram from './Instagram.js'
import Facebook from './Facebook.js'
import GoogleMap from './GoogleMap.js'

class Home extends Component {
  render() {
    return (
    	<div className="container-fluid">
    		<div className="row">
    			<div className="col-md-12 justify-content-center">
    				<News />
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-md-12 justify-content-center">
    				<News youtube/>
    			</div>
    		</div>
    		<div className="row">
	    		<div className="col-md-6">
	  				<Facebook postsWidth="350"/>
	  			</div>
	  			<div className="col-md-6">
	  				<Instagram postsWidth="320"/>
	  			</div>
  			</div>
  			<div className="row">
    			<div className="col-md-12">
    				<GoogleMap />
    			</div>
    		</div>
  		</div>
  	)
  }
}

export default Home;