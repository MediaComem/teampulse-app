import React, { Component } from 'react';
//import styled from 'styled-components';
import constantes from './constantes.js';

class Youtube extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      video: ""
    };
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/favori/data')
      .then(response => response.json())
      .then((data) => {
				this.setState({
					video: data.data.video.id,
					list: data.data.video.list
				})
			});
  }

  componentWillReceiveProps(newProps) {
  if (this.state.video !== newProps.data.video.id) {
    	this.setState({
				video: newProps.data.video.id,
				list: newProps.data.video.list
			});
  	}
	}

  render() {
	  let link = null;
		if(this.props.loop && this.props.playlist) {
			link = <iframe src={"https://www.youtube.com/embed/videoseries?list="+this.state.list+"&autoplay=1&loop=1&cc_load_policy=1rel=0&amp;controls=0&amp;showinfo=0"} frameBorder="0" allowFullScreen></iframe>
		} else if(this.props.playlist) {
			link = <iframe src={"https://www.youtube.com/embed/videoseries?list="+this.state.list} frameBorder="0" allowFullScreen></iframe>
		} else if(this.props.loop) {
	    link = <iframe src={"https://www.youtube.com/embed/"+this.state.video + "?autoplay=1&loop=1&cc_load_policy=1rel=0&amp;controls=0&amp;showinfo=0&playlist="+this.state.video} frameBorder="0" allowFullScreen></iframe>
		} else {
  		link = <iframe src={"https://www.youtube.com/embed/"+this.state.video} frameBorder="0" allowFullScreen></iframe>
		}

    return (
    	<div className="embed-responsive embed-responsive-16by9">
    		{link}
      </div>
    	)
  }
}

export default Youtube;
