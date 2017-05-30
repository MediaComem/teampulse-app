import React, { Component } from 'react';
//import styled from 'styled-components';
import constantes from './constantes.js';
// import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import FacebookPlayer  from 'react-facebook-player';
import './Facebook.css'





class FacebookVideo extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      postUrl: "",
      player: null,
    };
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/favori/data')
      .then(response => response.json())
      .then((data) => { this.setState({postUrl:data.data.video.url})});
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps)
    if (this.state.postUrl !== newProps.data.video.url) {
      this.setState({postUrl: newProps.data.video.url});
      this.forceUpdate()
    }
  }
	
	onReady(id,player){
		console.log("onReady player:", player)
     this.setState({
      player: player,
    });
    this.playVideo();
  }
  
  playVideo() {
		const { player } = this.state;
		console.log(player);
    if (player) player.play();
  }
	
  render() {
	  var videoId = /\/videos\/(\d+)\/$/.exec(this.props.data.video.url)[1],
	  videoElement;
	  console.log(videoId);
	  if(this.props.loop){
		  videoElement = <FacebookPlayer
				  appId={ "269918776508696" }                                  
				  videoId={ videoId.toString() }                                  
				  className={ "facebook-video" }                        
				  /* ATTRIBUTES. Ref: http://bit.ly/29OOzWZ */
				  allowfullscreen={ "true" }
				  autoplay={ "false" }
				  /* EVENTS. Ref: http://bit.ly/29JaA7J */
					onReady={ this.onReady.bind(this) }
				  onFinishedPlaying={ this.playVideo.bind(this) }
				/>
		} else {
			videoElement = <FacebookPlayer
				  appId={ "269918776508696" }                                  
				  videoId={ videoId.toString() }                                  
				  className={ "facebook-video" }                        
				  allowfullscreen={ "true" }
				  autoplay={ "false" }
				/>
		}
    if(videoId != null) {
      return ( videoElement )
    }else{
      console.log("FB VIDEO NULL")
      return (
        null
      )
    }
  }
}

export default FacebookVideo;


