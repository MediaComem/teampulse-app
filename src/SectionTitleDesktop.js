//import React, { Component } from 'react';
import styled from 'styled-components';

const SectionTitleDesktop = styled.div`
  position: absolute;
  font-size: 2rem;
  color: ${props => props.txtColor};
  padding: ${props => props.padding};
  text-transform: uppercase;
  font-weight: 500;
  backgroundColor: ${props => props.bgColor};
  top: ${props => props.top ? props.top + "px" : "auto"}
  right: ${ props => props.right ? props.right+"px" : "auto" }
  bottom: ${props => props.bottom}px;
  left: ${ props => props.left ? props.left+"px" : "auto" }
  z-index: 100;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  @media(max-width: 991px){
    display: none;
  }
  transition:top 0.5s linear;
  -webkit-transition-property: top;
  -webkit-transition-duration: 0.5s;
`;

export default SectionTitleDesktop;
