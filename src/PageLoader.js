import React, { Component } from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  font-size: 2.1rem;
  width:100%;
  height:100%;
  backgroundColor:white;
  zIndex:999999;
  left: 0;
  top: 0;
  position:fixed;
  display:flex;
  justify-content:center;
  align-items: center;
`;

class PageLoader extends Component {

  componentDidMount() {
    var video = document.getElementById('loading');
    video.play();
  }

  render() {
    return (
      <LoadingContainer>
        <video id="loading" width="100" height="100" autoPlay="true" loop="true">
          <source src="loading_300.mp4" type="video/mp4" />
          <source src="loading_300.ogg" type="video/ogg" />
          <source src="loading_300.webm" type="video/webm" />
        </video>
      </LoadingContainer>
    )
  }
}

export default PageLoader;
