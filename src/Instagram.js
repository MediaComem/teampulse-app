import React, { Component } from 'react';
//import styled from 'styled-components';
import constantes from './constantes.js';
import InstagramEmbed from 'react-instagram-embed';
import Slider from 'react-slick';
import { Event } from 'react-socket-io';
import MediaQuery from 'react-responsive';

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
      isPlaying: true
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

  afterChange() {
    if(this.props.changeHeight !== undefined && this.state.isPlaying) {
      var insta = document.getElementsByClassName("insta-container")[0];
      this.props.changeHeight(insta.getElementsByClassName("slick-active")[0].offsetHeight);
      // If autoplay is working we reset timeout and it will never end up inside.
      this.timer = setTimeout(() => {
          // This will start play again, important here is to have a timeout that exceeds your "autoplaySpeed".
          this.slider.innerSlider.play();
      }, 6200);
    }
  }

  _onHover() {
    if(this.slider !== undefined) {
      this.slider.innerSlider.pause();
      this.setState({
        isPlaying: false
      })
      clearTimeout(this.timer);
    }
  }
  _onHoverExit() {
    if(this.slider !== undefined) {
      this.slider.innerSlider.play();
      this.setState({
        isPlaying: true
      })
    }
  }

  render() {
    var settingsDesktop = {
      arrows: this.props.arrows,
      infinite: true,
      speed: 1000,
      fade: true,
      dots: this.props.dots,
      autoplaySpeed: 6000,
      autoplay: this.props.autoPlay,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      afterChange: this.afterChange.bind(this)
    };
    var settingsMobile = {
      arrows: this.props.arrows,
      infinite: true,
      speed: 1000,
      fade: false,
      dots: this.props.dots,
      autoplaySpeed: 6000,
      autoplay: this.props.autoPlay,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      afterChange: this.afterChange.bind(this)
    };
    if(this.state.postsId.length > 0) {
      return (
	      <div onMouseOver={this._onHover.bind(this)} onMouseLeave={this._onHoverExit.bind(this)}>
          <MediaQuery query='(max-width: 991px)'>
  	        <Slider ref={ c => this.slider = c } {...settingsMobile}>
  	          {this.state.postsId.map(function(post){
  	            return <div key={post.id}>
                  <InstagramEmbed
                    style={InstagramEmbedStyle}
                    hideCaption={true}
                    maxWidth={460}
                    url={post.url} />
                </div>;
  	          })}
  	        </Slider>
          </MediaQuery>
          <MediaQuery query='(min-width: 992px)'>
            <Slider ref={ c => this.slider = c } {...settingsDesktop}>
              {this.state.postsId.map(function(post){
                return <div key={post.id}>
                  <InstagramEmbed
                    style={InstagramEmbedStyle}
                    hideCaption={true}
                    maxWidth={460}
                    url={post.url} />
                </div>;
              })}
            </Slider>
          </MediaQuery>
        	<Event event='instagram' handler={this.onMessage} />
        </div>
      )
    }else{
      return (null)
    }
  }
}

export default Instagram;
