import React, { Component } from 'react';
import Flickr from './Flickr.js';

class News extends Component {

	constructor(props, context) {
    super(props, context);
  }

  render() {
  	if(this.props.youtube){
  		return (
        <div className="embed-responsive embed-responsive-16by9">
  		    <iframe src="https://www.youtube.com/embed/HROuJ1ZojhM" frameBorder="0" allowFullScreen></iframe>
        </div>
    	)
  	}else{
  		return (
    		<Flickr/>
    	)
  	}
  }
}

export default News;