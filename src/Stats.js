import React, { Component } from 'react';
import styled from 'styled-components';
import constantes from './constantes.js';

const Wrapper = styled.div`
  backgroundColor: #fff;
  paddingTop:20px;
  paddingBottom:20px;
  textAlign:center;
  @media(min-width: 992px){
    display: ${props => props.mobile ? 'none' : 'flex'};
    marginLeft:0;
    marginRight:0;
  }
  @media(max-width: 992px){
    display: ${props => props.mobile ? 'flex' : 'none'};
    paddingLeft:35px;
    paddingRight:35px;
  }
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
    @media(max-width: 992px){
      background:none;
    }
  }
  @media(max-width: 992px){
    flex-grow:1;
    flex-direction: row;
    display:flex;
  }
`;

const StatNum = styled.div`
  fontSize:3em;
  color:#55A549;
  @media(max-width: 992px){
    width:50%;
    textAlign:right;
    marginRight:5px;
  }
`;

const StatDescr = styled.div`
  color:#A6C222;
  @media(max-width: 992px){
    width:20%;
    textAlign:left;
    marginLeft:5px;
    display:flex;
    alignItems:center;
  }
`;

const ArrowNext = styled.span`
  color:#A6C222;
  background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ccc' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
`;
const ArrowPrev = styled.span`
  color:#A6C222;
  background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ccc' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
`;

class Stat extends Component {
  render() {
    return (
      <StatContainer isLast={this.props.isLast} className={this.props.className}>
        <StatNum>{this.props.value}</StatNum>
        <StatDescr>{this.props.descr}&nbsp;{this.props.unit}</StatDescr>
      </StatContainer>
    )
  }
}

const CarouselInnerStyle = {
  marginBottom:"20px"
};

class StatsContainer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Wrapper className="row">
          {this.props.stats.map((stat,i) => (
            <Stat className="col-md-2" isLast={this.props.stats.length == i+1 ? true:false} key={i.toString()+"a"} value={stat.value} descr={stat.descr} unit={stat.unit}/>
          ))}
        </Wrapper>
        <Wrapper mobile id="statsSlider" className="carousel slide">
          <ol className="carousel-indicators carousel-indicators--round">
            {this.props.stats.map((stat,i) => (
              <li key={i.toString()+"b"} data-target="#statsSlider" data-slide-to={i} className={(i==0 ? 'active' : '')}></li>
            ))}
          </ol>
          <div className="carousel-inner" style={CarouselInnerStyle} role="listbox">
            {this.props.stats.map((stat,i) => (
              <div className={"carousel-item " + (i==0 ? 'active' : '')}>
                <Stat key={i.toString()+"c"} value={stat.value} descr={stat.descr} unit={stat.unit}/>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#statsSlider" role="button" data-slide="prev">
            <ArrowPrev className="carousel-control-prev-icon" aria-hidden="true"></ArrowPrev>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#statsSlider" role="button" data-slide="next">
            <ArrowNext className="carousel-control-next-icon" aria-hidden="true"></ArrowNext>
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
      <StatsContainer stats={[{value:this.state.speed,descr:"Vitesse moyenne", unit:"km/h"},{value:this.state.rate,descr:"Cadence moyenne", unit:"rmp"},{value:this.state.temp,descr:"Température extérieur", unit:"°C"},{value:this.state.power,descr:"Puissance moyenne"},{value:"0",descr:"Altitude", unit:"m"},{value:"10:30",descr:"Heure locale"}]}/>
    )
  }
}

export default Stats;