import React, { Component } from 'react';
import styled from 'styled-components';

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

const StatsContainer = styled.div`
  backgroundColor: white;
  paddingTop:20px;
  paddingBottom:20px;
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
		fetch('http://localhost:3999/teampulse-data')
      .then(response => response.json())
      .then((body) => {
      	this.setState({speed:parseFloat(body.data.avgSpeed).toFixed(1)});
      	this.setState({rate:parseFloat(body.data.avgCadence).toFixed(1)});
      	this.setState({power:parseFloat(body.data.avgPower).toFixed(1)});
      });
  }

  render() {
    return (
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
    )
  }
}

export default Stats;