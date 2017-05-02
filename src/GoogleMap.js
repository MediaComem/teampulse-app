import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const MapContainer = styled.div`
    height:400px;
    max-width:100%;
    margin:auto;
  `;

class GoogleMap extends Component {

	constructor(props, context) {
    super(props, context);
  }

	componentDidMount() {
  }

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
		return (
      <MapContainer>
  		  <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}/>
      </MapContainer>
    )
  }
}

export default GoogleMap;