import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Slider from 'react-slick'

const FacebookEmbedStyle = {
  display:"flex",
  justifyContent:"center"
};

const FbWrapper = styled.div`
  textAlign:center;
`;

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, left: '50px', zIndex: '999'}}
      onClick={onClick}
    ></div>
  );
}

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, right: '50px', zIndex: '999'}}
      onClick={onClick}
    ></div>
  );
}

class Facebook extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      postsId: [],
    };
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/facebook/posts')
      .then(response => response.json())
      .then((data) => { this.setState({postsId:data})});
  }

  render() {
    var settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };
    if(this.state.postsId.length > 0) {
      return (
        <Slider {...settings}>
          {this.state.postsId.map(function(post){
            return <FbWrapper><FacebookProvider appId="269918776508696">
                      <EmbeddedPost style={FacebookEmbedStyle} href={"https://www.facebook.com/teampulse.ch/posts/"+post.id} width="500" />
                    </FacebookProvider></FbWrapper>
          })}
        </Slider>
      )
    }else{
      return (null)
    }
  }
}

export default Facebook;


