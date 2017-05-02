import React, { Component } from 'react';
import News from './News.js'
import Instagram from './Instagram.js'
import Facebook from './Facebook.js'

class Home extends Component {
  render() {
    return (
    	<div className="container-fluid">
    		<div className="row">
    			<div className="col-6">
    				<News/>
    			</div>
    			<div className="col-6">
    				<Instagram postsWidth="320"/>
    			</div>
    		</div>
    		<div className="row">
	    		<div className="col-md-6">
	  				<Facebook postsWidth="350"/>
	  			</div>
	  			<div className="col-md-6">
	  				Test
	  			</div>
  			</div>
  		</div>
  	)
  }
}

export default Home;