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
  padding:5px 10px;
  margin:1em 0 3em;
  color:#000;
  background:white;
  border: 2px solid #051392;
  min-width: 200px;
  &::before {
    content:"";
    position:absolute;
    bottom:-16px; /* value = - border-top-width - border-bottom-width */
    left:5px; /* controls horizontal position */
    border-width:16px 16px 0;
    border-style:solid;
    border-color: #051392 transparent;
    /* reduce the damage in FF3.0 */
    display:block;
    width:0;
  }
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
    margin: 0px;
    font-size: 0.7rem;
  }
  h5 {
    font-size: 0.9rem;
  }
`;

var months = ['janvier','février','mars','avril','mai','juin','juillet','août','sept.','oct.','nov.','dec.'],
  days = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];

class GMM extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      displayTime: this._displayDate(this.props.time)
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
    var d = new Date(time),
      minutes = d.getMinutes().toString().length === 1 ? '0'+d.getMinutes() : d.getMinutes(),
      hours = d.getHours().toString().length === 1 ? '0'+d.getHours() : d.getHours();
    return +' '+hours+':'+minutes + ' le ' + days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
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
                  <p><strong>cycliste:</strong> {this.props.name}</p>
                  <p><strong>Heure:</strong> {this.state.displayTime}</p>
                </Description>
              </Fade>
           </div>
  }
}
export default GMM;
