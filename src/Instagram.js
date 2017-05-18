import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';
import InstagramEmbed from 'react-instagram-embed'
import Slider from 'react-slick'

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
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/instagram/posts')
      .then(response => response.json())
      .then((data) => { this.setState({postsId:data})});
  }

  render() {
    var settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };
    if(this.state.postsId.length > 0) {
      return (
        <Slider {...settings}>
          {this.state.postsId.map(function(post){
            return <div><InstagramEmbed style={InstagramEmbedStyle} hideCaption={true} maxWidth={320} url={post.url} /></div>
          })}
        </Slider>
      )
    }else{
      return (null)
    }
  }
}

export default Instagram;