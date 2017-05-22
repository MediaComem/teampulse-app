import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';

class Youtube extends Component {

	constructor(props, context) {
		console.log(props)
    super(props, context);
    this.state = {
      video: ""
    };
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/favori/data')
      .then(response => response.json())
      .then((data) => { this.setState({video:data.data.video.v}) });
  }

  componentWillReceiveProps(newProps) {
  if (this.state.video !== newProps.data.video.v) {
    	this.setState({video: newProps.data.video.v});
  	}
	}

  render() {
    return (
    	<div className="embed-responsive embed-responsive-16by9">
		    <iframe src={"https://www.youtube.com/embed/"+this.state.video} frameBorder="0" allowFullScreen></iframe>
      </div>
    	)
  }
}

export default Youtube;