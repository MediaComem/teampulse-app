import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import constantes from './constantes.js';

const MapContainer = styled.div`
    height:400px;
    max-width:100%;
    margin:auto;
  `;

const CycloMarker = styled.div`
  position: absolute;
  width: ${props => (props.radius) * 2}px;
  height: ${props => (props.radius) * 2}px;
  left: ${props => (props.radius)}px;
  top: ${props => (props.radius)}px;

  border: 5px solid #f44336;
  borderRadius: ${props => (props.radius) * 2}px;
  backgroundColor: white;
`;

class GoogleMap extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      center: [0, 0],
      cycloLat: 0,
      cycloLng: 0
    };
  }

  componentDidMount() {
    fetch(constantes.serverUrl + '/teampulse/data')
      .then(response => response.json())
      .then((body) => {
        setTimeout(() => this.setState({ center: [parseFloat(body.latitude), parseFloat(body.longitude)], cycloLat: parseFloat(body.latitude), cycloLng: parseFloat(body.longitude) }), 1001);
      });
  }

  _onChange({ center, zoom }) {
    this.setState({
      center: center,
      zoom: zoom,
    });
  }

  render() {
    return (
      <MapContainer>
        <GoogleMapReact center={this.state.center} onChange={this._onChange.bind(this)} defaultZoom={11}>
          <CycloMarker lat={this.state.cycloLat} lng={this.state.cycloLng} radius={10} apiKey={"AIzaSyAf7QBjbsRt6Hv-aixRFPr_9f-WjSNkAWs"} onGoogleApiLoaded={({map, maps}) => map.data.loadGeoJson('raam2017.json')} yesIWantToUseGoogleMapApiInternals={true} />
            
          </GoogleMapReact>
      </MapContainer>
    )
  }
}

export default GoogleMap;