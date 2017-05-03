import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';

const Carousel = styled.div`
  width: ${props => props.width}px;
`;

const Image = styled.img`
	height:400px;
	max-width:100%;
	margin:auto;
`;

class Flickr extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      imagesUrl: [],
    };
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/flickrpics')
      .then(response => response.json())
      .then((data) => { this.setState({imagesUrl:data.picsId});});
  }

  render() {
    return (
    	<Carousel id="carouselFlickrControls" width={this.props.postsWidth} className="carousel slide" data-ride="carousel" data-interval="false">
				<div className="carousel-inner fbposts" role="listbox">
					{this.state.imagesUrl.map(function(image,index){
						if(index === 0){
							return <div className="carousel-item active" key={index}><Image src={image} alt="flickr"/></div>
						}else{
							return <div className="carousel-item" key={index}><Image src={image} alt="flickr"/></div>
						}
    			})}
				</div>
				<a className="carousel-control-prev" href="#carouselFlickrControls" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselFlickrControls" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</Carousel>
    	)
  }
}

export default Flickr;