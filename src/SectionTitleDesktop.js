import React, { Component } from 'react';
import styled from 'styled-components';

const SectionTitleDesktop = styled.div`
  position: absolute;
  font-size: 2.1rem;
  color: ${props => props.txtColor};
  padding: ${props => props.padding};
  text-transform: uppercase;
  font-weight: bold;
  backgroundColor: ${props => props.bgColor};
  right: ${props => props.right}px;
  bottom: ${props => props.bottom}px;
  z-index: 100;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  @media(max-width: 992px){
    display: none;
  }
`;

export default SectionTitleDesktop;