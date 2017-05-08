import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';

const StatContainer = styled.div`
  textAlign: center;
  &:after {
    content:''; 
    width:1px; 
    height:60%; 
    background: ${props => props.isLast ? 'none' : '#ccc'};
    position:absolute; 
    right:-4px;
    top:20%;
  }
`;

const StatNum = styled.div`
  fontSize:2em;
  color:#55A549;
`;

const StatDescr = styled.div`
  color:#A6C222;
`;

class Stat extends Component {

	constructor(props, context) {
    super(props, context);
  }

	componentDidMount() {
  }

  render() {
    return (
    	<StatContainer isLast={this.props.isLast}>
    		<StatNum>{this.props.value}</StatNum>
    		<StatDescr>{this.props.descr}</StatDescr>
    	</StatContainer>
    )
  }
}

const StatContainerMobile = styled.div`
  flex-grow:1;
  flex-direction: row;
  display:flex;
`;

const StatNumMobile = styled.div`
  width:50%;
  fontSize:2em;
  color:#55A549;
  textAlign:right;
  marginRight:5px;
`;

const StatDescrMobile = styled.div`
  width:50%;
  display:flex;
  alignItems:center;
  color:#A6C222;
  textAlign:left;
  marginLeft:5px;
`;

class StatMobile extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
  }

  render() {
    return (
      <StatContainerMobile isLast={this.props.isLast}>
        <StatNumMobile>{this.props.value}</StatNumMobile>
        <StatDescrMobile>{this.props.descr}</StatDescrMobile>
      </StatContainerMobile>
    )
  }
}

const StatsContainer = styled.div`
  backgroundColor: white;
  paddingTop:20px;
  paddingBottom:20px;
  @media(max-width: 768px){
    display:none;
  }
`;

const StatsContainerMobile = styled.div`
  backgroundColor: white;
  paddingTop:20px;
  paddingBottom:20px;
  textAlign:center;
  @media(min-width: 768px){
    display:none;
  }
`;

class Stats extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      speed: 0,
      rate: 0,
      temp: 0,
      power: 0
    };
  }

	componentDidMount() {
		fetch(constantes.serverUrl+'/teampulse-data')
      .then(response => response.json())
      .then((body) => {
      	this.setState({speed:parseFloat(body.data.avgSpeed).toFixed(1)});
      	this.setState({rate:parseFloat(body.data.avgCadence).toFixed(1)});
      	this.setState({power:parseFloat(body.data.avgPower).toFixed(1)});
      });
  }

  render() {
    return (
      <div>
        <StatsContainerMobile>
          <div id="statsSlider" className="carousel slide">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <StatMobile value={this.state.temp} descr="Température"/>
              </div>
              <div className="carousel-item">
                <StatMobile value={this.state.temp} descr="Température"/>
              </div>
              <div className="carousel-item">
                <StatMobile value={this.state.temp} descr="Température"/>
              </div>
            </div>
              <a className="carousel-control-prev" href="#statsSlider" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#statsSlider" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
          </div>
        </StatsContainerMobile>
        <StatsContainer>
          <div className="row">
            <div className="col-md-2">
              <Stat value={this.state.speed} descr="Vitesse"/>
            </div>
            <div className="col-md-2">
              <Stat value={this.state.rate} descr="Cadence"/>
            </div>
            <div className="col-md-2">
              <Stat value={this.state.temp} descr="Température"/>
            </div>
            <div className="col-md-2">
              <Stat value={this.state.power} descr="Puissance"/>
            </div>
            <div className="col-md-2">
              <Stat value={this.state.power} descr="Altitude"/>
            </div>
            <div className="col-md-2">
              <Stat isLast={true} value="10:30" descr="Heure locale"/>
            </div>
          </div>
        </StatsContainer>
      </div>
    )
  }
}

export default Stats;