import React, { Component } from 'react';
import styled from 'styled-components';
import './PageLoader.css'


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

const Image = styled.img`
  width:200px;
  height:200px;
`;

class PageLoader extends Component {

  render() {
    return (
      <LoadingContainer>
        <Image className="loading" src="loading.svg" alt="" />
      </LoadingContainer >
    )
  }
}

export default PageLoader;
