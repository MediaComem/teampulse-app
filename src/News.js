import React, { Component } from 'react';
import Flickr from './Flickr.js';
import Youtube from './Youtube.js';
import FacebookVideo from './FacebookVideo.js';
import constantes from './constantes.js';
import { Event } from 'react-socket-io';

class News extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      type: "",
      data: ""
    };
    this.onMessage = this.onMessage.bind(this);
  }

  componentDidMount() {
    fetch(constantes.serverUrl+'/favori/data')
      .then(response => response.json())
      .then((data) => { this.setState({type:data.type})});
  }

  onMessage(message) {
    console.log(message)
    this.setState({type:message.type,data:message.data})
  }

  render() {
    var stateValue = <div>NULL</div>
    if(this.state.type === 'youtube'){
      stateValue = <Youtube data={this.state.data} loop={this.props.loop} playlist={false}/>
    }
    if(this.state.type === 'youtube_playlist'){
      stateValue = <Youtube data={this.state.data} loop={this.props.loop} playlist={true}/>
    }

    if(this.state.type === 'flickr'){
      stateValue = <Flickr data={this.state.data} loop={this.props.loop}/>
    }
    if(this.state.type === 'facebook'){
      stateValue = <FacebookVideo data={this.state.data} loop={this.props.loop}/>
    }
  	return(
      <div>
        <Event event='favori' handler={this.onMessage} />
        {stateValue}
      </div>
    )
  }
}

export default News;