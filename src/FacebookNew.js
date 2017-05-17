import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';
import './Facebook.css'

const Carousel = styled.div`
`;

const CarouselInner = styled.div`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  width: 380px;
  height: 600px;
  @media(max-width: 992px){
    width: 100%;
    box-shadow: none;
    height: 800px;
  }
`;

const CarouselItem = styled.div`
  justify-content:center;
  margin-top: 15px;
  width: 100%;
`;

class FacebookNew extends Component {

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
        <Carousel id="carouselFacebookControls" postsWidth={this.props.postsWidth} className="carousel slide" data-ride="carousel" data-interval="false">
        <div id="fb-root"></div>
        <CarouselInner className="carousel-inner fbposts" postsWidth={this.props.postsWidth} role="listbox">
            {this.state.postsId.map(function(post,index){
              if(index === 0){
                return <CarouselItem className="carousel-item active" id={post} key={post}>
                          <div className="fb-post" data-href={"https://www.facebook.com/20531316728/posts/"+post} width="100%" data-width="auto" data-show-text="true"></div>
                        </CarouselItem>
              }else{
                return <CarouselItem className="carousel-item" id={post} key={post}>
                          <div className="fb-post" data-href={"https://www.facebook.com/20531316728/posts/"+post} width="100%" data-width="auto" data-show-text="true"></div>
                        </CarouselItem>
              }
            })}
        </CarouselInner>
        <a className="carousel-control-prev" href="#carouselFacebookControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselFacebookControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </Carousel>
      )
  }
}

export default FacebookNew;


