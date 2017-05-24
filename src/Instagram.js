import React, { Component } from 'react';
//import styled from 'styled-components';
import constantes from './constantes.js';
import InstagramEmbed from 'react-instagram-embed'
import Slider from 'react-slick'
import { Event } from 'react-socket-io';

const InstagramEmbedStyle = {
    display:"flex",
    justifyContent:"center"
};

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, left: '50px', zIndex: '999'}}
      onClick={onClick}
    ></div>
  );
}

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, right: '50px', zIndex: '999'}}
      onClick={onClick}
    ></div>
  );
}
class Instagram extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      postsId: [],
    };
    this.onMessage = this.onMessage.bind(this);
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/instagram/posts')
      .then(response => response.json())
      .then((data) => { this.setState({postsId:data})});
  }

  onMessage(message) {
    this.setState({postsId:message})
  }

  render() {
    var settings = {
      arrows: this.props.arrows,
      infinite: true,
      speed: 1000,
      dots: this.props.dots,
			autoplaySpeed: 6000,
      autoplay: this.props.autoPlay,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };
    if(this.state.postsId.length > 0) {
      return (
        <Slider {...settings}>
          {this.state.postsId.map(function(post){
            return <div><InstagramEmbed style={InstagramEmbedStyle} hideCaption={true} maxWidth={460} url={post.url} /></div>
          })}
          <Event event='instagram' handler={this.onMessage} />
        </Slider>
      )
    }else{
      return (null)
    }
  }
}

export default Instagram;