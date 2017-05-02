import React, { Component } from 'react';
import Flickr from './Flickr.js';

class News extends Component {

	constructor(props, context) {
    super(props, context);
  }

	componentDidMount() {
  }

  render() {
  	if(this.props.youtube){
  		return (
  			<div>
    		<iframe width="730" height="410" src="https://www.youtube.com/embed/HROuJ1ZojhM" frameBorder="0" allowFullScreen></iframe>
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