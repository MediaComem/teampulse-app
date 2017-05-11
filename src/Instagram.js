import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';
import InstagramEmbed from 'react-instagram-embed'

const Carousel = styled.div`
`;

const CarouselInner = styled.div`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  width: ${props => parseInt(props.postsWidth)+(40)}px;
  @media(max-width: 992px){
    width: 100%;
    box-shadow: none;
  }
  height: 600px;
`;

const InstagramEmbedStyle = {
  maxWidth:'500px',
  width: '90%',
  display:'flex',
  justifyContent: 'center'
};

class Instagram extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      postsId: [],
    };
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/instaposts')
      .then(response => response.json())
      .then((data) => { this.setState({postsId:data.instaPosts})});
  }

  render() {
    return (
    	<Carousel id="carouselInstaControls" width={this.props.postsWidth} className="carousel slide" data-ride="carousel" data-interval="false">
        <CarouselInner className="carousel-inner fbposts" postsWidth={this.props.postsWidth} role="listbox">
					{this.state.postsId.map(function(post,index){
						if(index === 0){
							return <div className="carousel-item active" id={post.id} key={post.id}><InstagramEmbed style={InstagramEmbedStyle} hideCaption={true} maxWidth={320} url={post.link} /></div>
						}else{
							return <div className="carousel-item" id={post.id} key={post.id}><InstagramEmbed hideCaption={true} maxWidth={320} url={post.link} /></div>
						}
    			})}
				</CarouselInner>
				<a className="carousel-control-prev" href="#carouselInstaControls" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselInstaControls" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</Carousel>
    	)
  }
}

export default Instagram;