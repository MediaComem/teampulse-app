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

class PageLoader extends Component {

  render() {
    return (
      <LoadingContainer>
        <div className="vertical-centered-box">
          <div className="content">
            <div className="loader-circle"></div>
            <div className="loader-line-mask">
              <div className="loader-line"></div>
            </div>
            <svg width="70" viewBox="0 0 63.3 39.8" id="prism-logo">
              <path  fill="#A6C222" d="M0 36.4v-33C0 2.4.4 1.6 1 1c.7-.7 1.5-1 2.4-1h46.8c3.6 0 6.7 1.3 9.3 3.8 2.6 2.6 3.8 5.7 3.8 9.3S62 20 59.5 22.5c-2.6 2.5-5.7 3.8-9.3 3.8H7v10.2c0 1-.3 1.8-1 2.4-.7.7-1.5 1-2.4 1s-1.8-.3-2.4-1c-.8-.7-1-1.5-1-2.4H0zM50.3 6.6H7v13h43.3c1.8 0 3.3-.7 4.6-2 1-1.2 1.7-2.8 1.7-4.6s-.6-3.3-2-4.6-2.7-1.8-4.4-1.8z"/>
            </svg>
          </div>
        </div>
      </LoadingContainer >
    )
  }
}

export default PageLoader;
