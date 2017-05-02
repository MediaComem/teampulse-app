import React, { Component } from 'react';
import News from './News.js'
import Instagram from './Instagram.js'
import Facebook from './Facebook.js'
import GoogleMap from './GoogleMap.js'
import Stats from './Stats.js'

class Home extends Component {
  render() {
    return (
    	<div className="container-fluid">
    		<div className="row">
    			<div className="col-md-12">
    				<Stats />
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