import React, { Component } from 'react';
import Embedo from 'embedo';
import styled from 'styled-components';
import constantes from './constantes.js';

const embedo = new Embedo({
  facebook: {
      version: 'v2.8',
      appId: '269918776508696'
    }
});

const Carousel = styled.div`
`;

const CarouselInner = styled.div`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  width: ${props => parseInt(props.postsWidth)+(40)}px;
  @media(max-width: 768px){
    max-width: ${props => props.postsWidth}px;
    box-shadow: none;
  }
  height: 600px;
`;

class Facebook extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      postsId: [],
    };
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/fbposts')
      .then(response => response.json())
      .then((data) => { this.setState({postsId:data.postsId});this.embed(data.postsId)});
  }

  embed(postsId){
  	for (var i = 0; i < postsId.length; i++){
  		embedo.load(
      document.getElementById(postsId[i]),
        'https://www.facebook.com/teampulse.ch/posts/'+postsId[i],
        {width:this.props.postsWidth}
    	);
  	}
  }

  render() {
    return (
    	<Carousel id="carouselExampleControls" postsWidth={this.props.postsWidth} className="carousel slide" data-ride="carousel" data-interval="false">
				<CarouselInner className="carousel-inner fbposts" postsWidth={this.props.postsWidth} role="listbox">
					{this.state.postsId.map(function(post,index){
						if(index === 0){
							return <div className="carousel-item active" id={post} key={post}></div>
						}else{
							return <div className="carousel-item" id={post} key={post}></div>
						}
    			})}
				</CarouselInner>
				<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</Carousel>
    	)
  }
}

export default Facebook;