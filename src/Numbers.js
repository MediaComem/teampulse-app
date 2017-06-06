import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';
import { Event } from 'react-socket-io';

const displayFlex = {
  display: "flex",
  marginLeft: 0,
  marginRight: 0,
  alignItems: "center"
}

const cssStatNum = {
  width: "50%",
  textAlign: "right",
  paddingRight: "3px"
}

const cssStatDescr = {
  width: "30%",
  textAlign: "left",
  paddingLeft: "3px"
}

const StatContainer = styled.div`
  textAlign: center;
  ${(props) => props.displayFlex === true ? displayFlex : null}
`;

const StatNum = styled.div`
  fontSize:2.8em;
  color:#55A549;
  ${(props) => props.displayFlex === true ? cssStatNum : null}
`;

const StatDescr = styled.div`
  color:#c6c6c6;
  text-transform:uppercase;
  line-height: 1.4;
	fontSize:0.80em;
  ${(props) => props.displayFlex === true ? cssStatDescr : null}
`;

const StatUnit = styled.span`
`;


function parseFloatToFixed(num, x, base) {
  x = parseFloat(x, base);
  var pow = Math.pow(base || 10, x);
  return +(Math.round(num * pow) / pow);
}

export class SuperStat extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { powerValue: 0, localTime: 0, rawOffset: 0, dstOffset: 0 };
    this.onMessage = this.onMessage.bind(this);
  }

  componentDidMount() {
    fetch(constantes.serverUrl + '/teampulse/data')
      .then(response => response.json())
      .then((body) => {
        this.setState({ powerValue: parseFloatToFixed(body.avgPower, 1, 10) || "-", rateValue: parseFloatToFixed(body.avgCadence, 1, 10) || "-", speedValue: parseFloatToFixed(body.avgSpeed, 1, 10) || "-", tempValue: parseFloatToFixed(body.temperature, 1, 10) || "-", altValue: parseInt(body.altitude, 10) || "-", rawOffset: parseInt(body.rawOffset, 10) || "-", dstOffset: parseInt(body.dstOffset, 10) || "-" });
      });
    this.timerID = setInterval(
      () => this.updateTime(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  onMessage(message) {
    this.setState({ powerValue: parseFloatToFixed(message.avgPower, 1, 10) || "-", rateValue: parseFloatToFixed(message.avgCadence, 1, 10) || "-", speedValue: parseFloatToFixed(message.avgSpeed, 1, 10) || "-", tempValue: parseFloatToFixed(message.temperature, 1, 10) || "-", altValue: parseInt(message.altitude, 10) || "-", rawOffset: parseInt(message.rawOffset, 10) || "-", dstOffset: parseInt(message.dstOffset, 10) || "-" });
  }

  calcLocalTime(offset) {
    var utc = new Date().getTime();
    var utcOffset = new Date(utc + (1000 * offset));
    var minutes = utcOffset.getUTCMinutes();
    var hours = utcOffset.getUTCHours();
    return (hours < 10 ? '0' + hours : hours) + ":" + (minutes < 10 ? '0' + minutes : minutes)
  }

  updateTime() {
    this.setState({
      localTime: this.calcLocalTime(this.state.rawOffset + this.state.dstOffset)
    });
  }

  render() {
    var statValue = <StatNum>N/A</StatNum>
    if (this.props.type === 'speed') {
      statValue = <StatNum displayFlex={this.props.displayFlex}>{this.state.speedValue}</StatNum>
    }
    if (this.props.type === 'rate') {
      statValue = <StatNum displayFlex={this.props.displayFlex}>{this.state.rateValue}</StatNum>
    }
    if (this.props.type === 'power') {
      statValue = <StatNum displayFlex={this.props.displayFlex}>{this.state.powerValue}</StatNum>
    }
    if (this.props.type === 'temp') {
      statValue = <StatNum displayFlex={this.props.displayFlex}>{this.state.tempValue}</StatNum>
    }
    if (this.props.type === 'alt') {
      statValue = <StatNum displayFlex={this.props.displayFlex}>{this.state.altValue}</StatNum>
    }
    if (this.props.type === 'time') {
      statValue = <StatNum displayFlex={this.props.displayFlex}>{this.state.localTime}</StatNum>
    }
    return (
      <StatContainer displayFlex={this.props.displayFlex} className={this.props.className}>
        {statValue}
        <StatDescr displayFlex={this.props.displayFlex}>{this.props.descr}&nbsp;<StatUnit>({this.props.unit})</StatUnit></StatDescr>
        <Event event='teampulse' handler={this.onMessage} />
      </StatContainer>
    )
  }
}