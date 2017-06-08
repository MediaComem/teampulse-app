import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const CycloMarker2 = styled.div`
  position: absolute;
  width: ${props => (props.radius)}px;
  height: ${props => (props.radius)}px;
  left: ${props => -(props.radius)/2}px;
  top: ${props => -(props.radius)/2}px;

  border: 2px solid #051392;
  borderRadius: ${props => (props.radius)}px;
  backgroundColor: white;
  textAlign: center;
  color: #051392;
  fontSize: 16;
`;

const fadeIn = keyframes`
  from {
    transform: translateY(0px);
    opacity: 0;
  }

  to {
    transform: translateY(-10px);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 1;
  }

  to {
    transform: translateY(0px);
    opacity: 0;
  }
`;

const Fade = styled.div`
  display: inline-block;
  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? fadeOut : fadeIn} 0.2s linear;
  transition: visibility 0.2s linear;
`;

const Description = styled.div`
  position:absolute;
  bottom:-5px;
  left: -22px;
  padding:15px;
  margin:1em 0 3em;
  color:#051392;
  background:white;
  min-width: 220px;
  -webkit-border-radius:10px;
  -moz-border-radius:10px;
  border-radius:10px;
  -webkit-box-shadow: 0px 9px 18px 5px rgba(0,0,0,0.35);
  -moz-box-shadow: 0px 9px 18px 5px rgba(0,0,0,0.35);
  box-shadow: 0px 9px 18px 5px rgba(0,0,0,0.35);
  &::after {
    content:"";
    position:absolute;
    bottom:-13px; /* value = - border-top-width - border-bottom-width */
    left:8px; /* value = (:before left) + (:before border-left) - (:after border-left) */
    border-width:13px 13px 0;
    border-style:solid;
    border-color:#fff transparent;
    /* reduce the damage in FF3.0 */
    display:block;
    width:0;
  }
  p{
    margin: 3px 0px;
    font-size: 0.8rem;
  }
  h5 {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 3px;
  }
  hr {
    margin: 0 0 10px 0;
    border: 1px solid #051392;
    width: 50px;
  }
`;

var months = ['janvier','février','mars','avril','mai','juin','juillet','août','sept.','oct.','nov.','dec.'],
  days = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];

class GMM extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      displayDate: this._displayDate(this.props.time),
      displayTime: this._displayTime(this.props.time),
      displayCyclistName: this._displayCyclistName(this.props.name)
    }
  }

  _onMouseEnter(props) {
    this.setState({
      visible: true
    })
  }

  _onMouseLeave(props) {
    this.setState({
      visible: false
    })
  }

  _displayDate(time) {
    var d = new Date(time);
    return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
  }

  _displayTime(time) {
    var d = new Date(time),
    minutes = d.getMinutes().toString().length === 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length === 1 ? '0'+d.getHours() : d.getHours();
    return hours+':'+minutes
  }

  _displayCyclistName(name) {
    switch (name) {
      case "CYCLIST_001":
        return "001";
      case "CYCLIST_002":
        return "002";
      case "CYCLIST_003":
        return "003";
      case "CYCLIST_004":
        return "004";
      case "CYCLIST_005":
        return "005";
      case "CYCLIST_006":
        return "006";
      case "CYCLIST_007":
        return "007";
      case "CYCLIST_008":
        return "008";
      default:
        return "Inconnu";
    }
  }

  render() {
    //console.log(this.props);
    return <div>
              <CycloMarker2
                lat={this.props.lat}
                lng={this.props.lng}
                radius={this.props.radius}
                onMouseEnter={this._onMouseEnter.bind(this)}
                onMouseLeave={this._onMouseLeave.bind(this)}
                />
              <Fade
                out={!this.state.visible}
                >
                <Description>
                  <h5>Changement de cycliste</h5>
                  <hr />
                  <p>Cycliste: {this.state.displayCyclistName}</p>
                  <p>Heure: {this.state.displayTime}</p>
                  <p>Date: {this.state.displayDate}</p>
                </Description>
              </Fade>
           </div>
  }
}
export default GMM;
