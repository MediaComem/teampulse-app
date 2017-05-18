import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';


const StatContainer = styled.div`
  textAlign: center;
`;

const StatNum = styled.div`
  fontSize:3em;
  color:#55A549;
`;

const StatDescr = styled.div`
  color:#A6C222;
`;


export class StatSpeed extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {speedValue: 0};
  }

  componentDidMount() {
    console.log(this.state.speedValue)
    fetch(constantes.serverUrl+'/teampulse/data')
      .then(response => response.json())
      .then((body) => {
        this.setState({speedValue:parseFloat(body.avgSpeed).toFixed(1)});
      });
  }

  render() {
    return (
      <StatContainer isLast={this.props.isLast} className={this.props.className}>
        <StatNum>{this.state.speedValue}</StatNum>
        <StatDescr>{this.props.descr}&nbsp;{this.props.unit}</StatDescr>
      </StatContainer>
    )
  }
}

export class StatRate extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {rateValue: 0};
  }

  componentDidMount() {
    fetch(constantes.serverUrl+'/teampulse/data')
      .then(response => response.json())
      .then((body) => {
        this.setState({rateValue:parseFloat(body.avgCadence).toFixed(1)});
      });
  }

  render() {
    return (
      <StatContainer isLast={this.props.isLast} className={this.props.className}>
        <StatNum>{this.state.rateValue}</StatNum>
        <StatDescr>{this.props.descr}&nbsp;{this.props.unit}</StatDescr>
      </StatContainer>
    )
  }
}