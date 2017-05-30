import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';
import Slider from 'react-slick'

const Image = styled.img`
	height:500px;
	max-width:100%;
	margin:auto;
`;

class Flickr extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			imagesUrl: []
		};
	}

	componentDidMount() {
		fetch(constantes.serverUrl + '/favori/data')
			.then(response => response.json())
			.then((data) => { this.setState({ imagesUrl: data.data.photos }); });
	}

	componentWillReceiveProps(newProps) {
		if (this.state.imagesUrl !== newProps.data.photos) {
			this.setState({ imagesUrl: newProps.data.photos });
		}
	}

	render() {
		var settings = {
			arrows: this.props.arrows,
			infinite: true,
			speed: 1000,
			fade: true,
			draggable:false,
			dots: this.props.dots,
			autoplaySpeed: 3000,
			autoplay: this.props.autoPlay,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		if (this.state.imagesUrl.length > 0) {
			return (
				<div >
					<Slider {...settings}>
						{this.state.imagesUrl.map(function (image, index) {
							if (index === 0) {
								return <div className="carousel-item active" key={index}><Image src={image.url} alt="flickr" /></div>
							} else {
								return <div className="carousel-item" key={index}><Image src={image.url} alt="flickr" /></div>
							}
						})}
					</Slider>
				</div>
			)
		} else {
			return (null)
		}
	}
}

export default Flickr;