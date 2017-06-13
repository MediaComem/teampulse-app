import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';
import Slider from 'react-slick'

const Image = styled.img`
	height: ${props => props.imgHeight}px;
	width: ${props => props.imgWidth}px;
	max-width:100%;
	margin:auto;
`;

const div = styled.div`
	height: ${props => props.imgHeight}px;
`;

class Flickr extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			imagesUrl: []
		};
		this.afterChange()
	}

	componentDidMount() {
		fetch(constantes.serverUrl + '/favori/data')
			.then(response => response.json())
			.then((data) => {
				this.setState({ imagesUrl: data.data.photos });
				this.setState({ photosetUrl: data.data.photoset.url });
			});
	}

	componentWillReceiveProps(newProps) {
		if (this.state.imagesUrl !== newProps.data.photos) {
			this.setState({ imagesUrl: newProps.data.photos })
			this.setState({ photosetUrl: newProps.data.photoset.url });
		}
	}

	afterChange() {
		if (this.props.forceLoop) {
			// If autoplay is working we reset timeout and it will never end up inside.
			clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				// This will start play again, important here is to have a timeout that exceeds your "autoplaySpeed".
				this.slider.innerSlider.play();
			}, 3200);
		}
	}

	render() {
		var settings = {
			arrows: this.props.arrows,
			infinite: true,
			speed: 1000,
			fade: false,
			draggable: false,
			swipe: true,
			lazyload: 'progressive',
			dots: this.props.dots,
			autoplaySpeed: 3000,
			autoplay: this.props.loop,
			slidesToShow: 1,
			slidesToScroll: 1,
			afterChange: this.afterChange.bind(this)
		};
		if (this.state.imagesUrl.length > 0) {
			return (
				<div >
					<Slider ref={c => this.slider = c} {...settings}>
						{this.state.imagesUrl.map((image, index) => {

							var srcset = image
								.map(s => s.source + " " + s.width + "w")
								.join(",");

							var largest = image[image.length - 1];

							return (
								<div className={'carousel-item ' + (index === 0 ? 'active' : '')} key={index}>
									<a href={this.state.photosetUrl}>
										<Image src={largest.source} srcSet={srcset} alt="flickr" imgWidth={largest.width} />
									</a>
								</div>
							)
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
