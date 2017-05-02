import React, { Component } from 'react';
import styled from 'styled-components';


class Stat extends Component {

	constructor(props, context) {
    super(props, context);
  }

	componentDidMount() {
  }

  render() {
    return (
    	<div>
    		<div>{this.props.value}</div>
    		<div>{this.props.descr}</div>
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
    	<div>
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
    		</div>
    	</div>
    )
  }
}

export default Stats;