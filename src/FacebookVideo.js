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
    // this.onReady = this.onReady.bind(this);
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
		console.log("onReady player:")
    console.log(player)
  }
	
  render() {
	  var videoId = /\/videos\/(\d+)\/$/.exec(this.props.data.video.url)[1];
	  console.log(videoId);
    if(videoId != null) {
      return (
	      <FacebookPlayer
				  appId={ "269918776508696" }                                  
				  videoId={ videoId.toString() }                                  
				  className={ "facebook-video" }                        
				  /* ATTRIBUTES. Ref: http://bit.ly/29OOzWZ */
				  allowfullscreen={ "true" }
				  autoplay={ "false" }
				  /* EVENTS. Ref: http://bit.ly/29JaA7J */
					onReady={ this.onReady }
				  onFinishedPlaying={ this.playVideo }
				/>
      )
    }else{
      console.log("FB VIDEO NULL")
      return (
        null
      )
    }
  }
}

export default FacebookVideo;


