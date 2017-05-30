import React, { Component } from 'react';
//import styled from 'styled-components';
import constantes from './constantes.js';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import './Facebook.css'

class FacebookVideo extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      postUrl: "",
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

  render() {
    if(this.state.postUrl !== "") {
      console.log("FB VIDEO")
      console.log(this.state.postUrl)
      return (
        <FacebookProvider appId="269918776508696">
          <EmbeddedPost href={this.state.postUrl} width="auto" data-autoplay="true" />
        </FacebookProvider>
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


