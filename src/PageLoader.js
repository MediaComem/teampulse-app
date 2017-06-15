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
            <svg width="50" viewBox="0 0 91.2 91.2" id="prism-logo">
              <path d="M16 66V33c0-1 .4-1.8 1-2.4.7-.7 1.5-1 2.4-1h46.8c3.6 0 6.7 1.3 9.3 3.8 2.6 2.6 3.8 5.7 3.8 9.3 0 3.6-1.3 6.7-3.8 9.3-2.6 2.5-5.7 3.8-9.3 3.8H23V66c0 1-.3 1.8-1 2.4-.7.7-1.5 1-2.4 1s-1.8-.3-2.4-1c-.8-.7-1-1.5-1-2.4zm50.3-29.8H23v13h43.3c1.8 0 3.3-.7 4.6-2 1.2-1.2 1.8-2.8 1.8-4.6s-.6-3.3-2-4.6-2.7-1.8-4.5-1.8z" fill="#A6C222" />
            </svg>
          </div>
        </div>
      </LoadingContainer >
    )
  }
}

export default PageLoader;
