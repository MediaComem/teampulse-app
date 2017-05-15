import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import './Facebook.css'

const Carousel = styled.div`
`;

const CarouselInner = styled.div`
`;

const CarouselItem = styled.div`
`;

const FacebookEmbedStyle = {
};

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
      .then((data) => { this.setState({postsId:data.postsId})});
  }

  render() {
    return (
      <div>
      <FacebookProvider appId="269918776508696">
        <EmbeddedPost href={"https://www.facebook.com/teampulse.ch/posts/1769795006666473"} width="auto" />
      </FacebookProvider>
    	<Carousel id="carouselFacebookControls" postsWidth={this.props.postsWidth} className="carousel slide" data-ride="carousel" data-interval="false">
        <CarouselInner className="carousel-inner fbposts" postsWidth={this.props.postsWidth} role="listbox">
					{this.state.postsId.map(function(post,index){
						if(index === 0){
							return <CarouselItem className="carousel-item active" id={post} key={post}>
                        <FacebookProvider appId="269918776508696">
                          <EmbeddedPost href={"https://www.facebook.com/teampulse.ch/posts/"+post} width="auto" />
                        </FacebookProvider>
                      </CarouselItem>
            }else{
              return <CarouselItem className="carousel-item" id={post} key={post}>
                        <FacebookProvider appId="269918776508696">
                          <EmbeddedPost href={"https://www.facebook.com/teampulse.ch/posts/"+post} width="auto" />
                        </FacebookProvider>
                      </CarouselItem>
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
      </div>
    	)
  }
}

export default Facebook;


