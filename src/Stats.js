import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';

const Wrapper = styled.div`
  backgroundColor: black;
  paddingTop:20px;
  paddingBottom:20px;
  textAlign:center;
  @media(min-width: 768px){
    display: ${props => props.mobile ? 'none' : 'flex'};
  }
  @media(max-width: 768px){
    display: ${props => props.mobile ? 'flex' : 'none'};
    paddingLeft:35px;
    paddingRight:35px;
  }
`;

const WrapperMobile = styled.div`
  backgroundColor: white;
  paddingTop:20px;
  paddingBottom:20px;
  textAlign:center;

`;

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
    @media(max-width: 768px){
      background:none;
    }
  }
  @media(max-width: 768px){
    flex-grow:1;
    flex-direction: row;
    display:flex;
  }
`;

const StatNum = styled.div`
  fontSize:2em;
  color:#55A549;
  @media(max-width: 768px){
    width:50%;
    textAlign:right;
    marginRight:5px;
  }
`;

const StatDescr = styled.div`
  color:#A6C222;
  @media(max-width: 768px){
    width:50%;
    textAlign:left;
    marginLeft:5px;
    display:flex;
    alignItems:center;
  }
`;

class Stat extends Component {
  render() {
    return (
      <StatContainer>
        <StatNum>{this.props.value}</StatNum>
        <StatDescr>{this.props.descr}&nbsp;{this.props.unit}</StatDescr>
      </StatContainer>
    )
  }
}

class StatsContainer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Wrapper className="row">
          {this.props.stats.map((stat,i) => (
            <Stat key={i.toString()+"a"} value={stat.value} descr={stat.descr} unit={stat.unit}/>
          ))}
        </Wrapper>
        <Wrapper mobile id="statsSlider" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {this.props.stats.map((stat,i) => (
              <li key={i.toString()+"b"} data-target="#statsSlider" data-slide-to={i} className={(i==0 ? 'active' : '')}></li>
            ))}
          </ol>
          <div className="carousel-inner" role="listbox">
            {this.props.stats.map((stat,i) => (
              <div className={"carousel-item " + (i==0 ? 'active' : '')}>
                <Stat key={i.toString()+"c"} value={stat.value} descr={stat.descr} unit={stat.unit}/>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#statsSlider" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#statsSlider" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </Wrapper>
      </div>
    )
  }
}

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
      <StatsContainer stats={[{value:this.state.speed,descr:"Vitesse moyenne", unit:"km/h"},{value:this.state.rate,descr:"Cadence moyenne", unit:"rmp"},{value:this.state.temp,descr:"Température extérieur", unit:"°C"},{value:this.state.power,descr:"Puissance moyenne"},{value:"0",descr:"Altitude", unit:"m"},{value:"10:30",descr:"Heure locale"}]}></StatsContainer>
    )
  }
}

export default Stats;