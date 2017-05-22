import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';
import { Event } from 'react-socket-io';

const displayFlex = {
  display: "flex",
  marginLeft:0,
  marginRight:0,
  alignItems:"center"
}

const cssStatNum = {
  width:"50%",
  textAlign:"right",
  paddingRight:"3px"
}

const cssStatDescr = {
  width:"30%",
  textAlign:"left",
  paddingLeft:"3px"
}

const StatContainer = styled.div`
  textAlign: center;
  ${(props) => props.displayFlex === true ? displayFlex : null}
`;

const StatNum = styled.div`
  fontSize:3em;
  color:#55A549;
  ${(props) => props.displayFlex === true ? cssStatNum : null}
`;

const StatDescr = styled.div`
  color:#A6C222;
  ${(props) => props.displayFlex === true ? cssStatDescr : null}
`;

export class SuperStat extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {powerValue: 0};
    this.onMessage = this.onMessage.bind(this);
  }

  componentDidMount() {
    fetch(constantes.serverUrl+'/teampulse/data')
      .then(response => response.json())
      .then((body) => {
        this.setState({powerValue:parseFloat(body.avgPower).toFixed(1),rateValue:parseFloat(body.avgCadence).toFixed(1),speedValue:parseFloat(body.avgSpeed).toFixed(1)});
      });
  }

  onMessage(message) {
    this.setState({powerValue:parseFloat(message.avgPower).toFixed(1),rateValue:parseFloat(message.avgCadence).toFixed(1),speedValue:parseFloat(message.avgSpeed).toFixed(1)});
  }

  render() {
    var statValue = <StatNum>N/A</StatNum>
    if(this.props.type === 'speed'){
      statValue = <StatNum displayFlex={this.props.displayFlex}>{this.state.speedValue}</StatNum>
    }
    if(this.props.type === 'rate'){
      statValue = <StatNum displayFlex={this.props.displayFlex}>{this.state.rateValue}</StatNum>
    }
    if(this.props.type === 'power'){
      statValue = <StatNum displayFlex={this.props.displayFlex}>{this.state.powerValue}</StatNum>
    }
    return (
      <StatContainer displayFlex={this.props.displayFlex} className={this.props.className}>
        {statValue}
        <StatDescr displayFlex={this.props.displayFlex}>{this.props.descr}&nbsp;{this.props.unit}</StatDescr>
        <Event event='teampulse' handler={this.onMessage} />
      </StatContainer>
    )
  }
}