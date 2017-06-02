import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Slider from 'react-slick'
import './Facebook.css'
import { Event } from 'react-socket-io';

const FacebookEmbedStyle = {
  display:"flex",
  justifyContent:"center"
};

const FbWrapper = styled.div`
  textAlign:center;
`;

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

class Facebook extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      postsId: [],
    };
    this.onMessage = this.onMessage.bind(this);
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/facebook/posts')
      .then(response => response.json())
      .then((data) => { this.setState({postsId:data})});
      this.afterChange()
  }

  onMessage(message) {
    this.setState({postsId:message})
  }

  afterChange() {
    if(this.props.forceLoop) {
      var facebook = document.getElementsByClassName("facebook-container")[0];
      var slider = facebook.getElementsByClassName("slick-active")[0];

      if(slider !== undefined) {
        console.log(slider.offsetHeight);
        facebook.style.height = slider.offsetHeight+"px";
      }
      // If autoplay is working we reset timeout and it will never end up inside.
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
          // This will start play again, important here is to have a timeout that exceeds your "autoplaySpeed".
          this.slider.innerSlider.play();
      }, 13200);
    }
  }

  render() {
    var settings = {
      arrows: this.props.arrows,
      infinite: true,
      speed: 1000,
      fade: true,
      dots: this.props.dots,
      autoplaySpeed: 13000,
      autoplay: this.props.autoPlay,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      afterChange: this.afterChange.bind(this)
    };
    if(this.state.postsId.length > 0) {
      return (
	      <div>
	          <Slider ref={ c => this.slider = c } {...settings}>
	          {this.state.postsId.map(function(post){
	            return <FbWrapper key={post.id}><FacebookProvider appId="269918776508696">
	                      <EmbeddedPost style={FacebookEmbedStyle} href={"https://www.facebook.com/teampulse.ch/posts/"+post.id} width="500" showText={true}/>
	                   </FacebookProvider></FbWrapper>
	          })}
	        </Slider>
	        <Event event='facebook' handler={this.onMessage} />
	      </div>
      )
    }else{
      return (null)
    }
  }
}

export default Facebook;
