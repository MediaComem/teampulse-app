//import React, { Component } from 'react';
import styled from 'styled-components';

const SectionTitle = styled.div`
  font-size: 2.1rem;
  color: ${props => props.txtColor};
  textAlign:center;
  padding: ${props => props.padding};
  text-transform: uppercase;
  font-weight: bold;
  backgroundColor: ${props => props.bgColor};
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  @media(min-width: 992px){
    display: none;
  }
`;

export default SectionTitle;