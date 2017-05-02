import React, { PropTypes,Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const MapContainer = styled.div`
    height:400px;
    max-width:100%;
    margin:auto;
  `;

const CycloMarker = styled.div`
  position: absolute;
  width: ${props => (props.radius)*2}px;
  height: ${props => (props.radius)*2}px;
  left: ${props => (props.radius)}px;
  top: ${props => (props.radius)}px;

  border: 5px solid #f44336;
  borderRadius: ${props => (props.radius)*2}px;;
  backgroundColor: white;
`;

class GoogleMap extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      center:[0,0]
    };
  }

	componentDidMount() {
    fetch('http://localhost:3999/teampulse-data')
      .then(response => response.json())
      .then((body) => {
        setTimeout(() => this.setState({center:[parseFloat(body.data.latitude),parseFloat(body.data.longitude)]}), 1000);
      });
  }

  _onChange({center, zoom}){
    this.setState({
      center: center,
      zoom: zoom,      
    });
  }

  render() {
		return (
      <MapContainer>
  		  <GoogleMapReact center={this.state.center} onChange={this._onChange.bind(this)} defaultZoom={11}><CycloMarker lat={59.955413} lng={30.337844} radius={10} /></GoogleMapReact>
      </MapContainer>
    )
  }
}

export default GoogleMap;