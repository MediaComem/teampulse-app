import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import constantes from './constantes.js';
import GMM from './GoogleMapMarker.js';
import { Event } from 'react-socket-io';

const MapContainer = styled.div`
    height: ${props => (props.height)}px;
    max-width:100%;
    margin:auto;
  `;

const CycloMarker = styled.div`
  position: absolute;
  width: ${props => (props.radius)}px;
  height: ${props => (props.radius)}px;
  left: ${props => -(props.radius)/2}px;
  top: ${props => -(props.radius)/2}px;

  border: 2px solid #051392;
  borderRadius: ${props => (props.radius)}px;
  backgroundColor: #051392;
  textAlign: center;
  color: #051392;
  fontSize: 16;
`;

function createMapOptions(maps) {
return {
  mapTypeControlOptions: {
    position: maps.ControlPosition.TOP_RIGHT
  },
  scaleControl: true,
  mapTypeControl: true
};
}

class GoogleMap extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      center:[0,0],
      cycloLat: 0,
      cycloLng: 0,
      cyclistChange: []
    };
    this.onMessage = this.onMessage.bind(this);
  }

	componentDidMount() {
    fetch(constantes.serverUrl+'/teampulse/data')
      .then(response => response.json())
      .then((body) => {
        setTimeout(() => this.setState({
          center:[
            parseFloat(body.latitude),
            parseFloat(body.longitude)
          ],
          cycloLat:parseFloat(body.latitude),
          cycloLng:parseFloat(body.longitude),
        }), 1001);
      });
    fetch(constantes.serverUrl+'/teampulse/switch')
      .then(response => response.json())
      .then((body) => {
        setTimeout(() => this.setState({
          cyclistChange: body
        }), 1001);
      })
  }

  onMessage(message) {
    console.log(message);
    this.setState({
      cycloLat:parseFloat(message.latitude),
      cycloLng:parseFloat(message.longitude),
    });
  }

  _onChange({center, zoom}){
    this.setState({
      center: center,
      zoom: zoom,
    });
  }

  loadRaamTrack(map) {
	map.data.loadGeoJson('raam2x.json');
	map.data.setStyle({
	  strokeColor: "#051392",
	  strokeWeight: 2
	});
  }

  render() {
    var center;
    if(this.props.lockCenter) {
      center = [38.195798, -98.918725];
    } else {
      center = this.state.center;
    }

    const cyclistChange = this.state.cyclistChange;
		return (
			<MapContainer height={this.props.height}>
			   <GoogleMapReact
          options={createMapOptions}
          center={center}
          onChange={this._onChange.bind(this)}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{key: "AIzaSyAf7QBjbsRt6Hv-aixRFPr_9f-WjSNkAWs", language:"fr"}}

          onGoogleApiLoaded={({map, maps}) => this.loadRaamTrack(map)}
          yesIWantToUseGoogleMapApiInternals
          >
			    	<CycloMarker lat={this.state.cycloLat} lng={this.state.cycloLng} radius={20} />
            {
              cyclistChange.map(function (data, index) {
                return <GMM key={index} lat={data.latitude} lng={data.longitude} name={data.contestant} time={data.localTime} radius={10} />
              })
            }
			   </GoogleMapReact>
         <Event event='teampulse' handler={this.onMessage} />
			</MapContainer>
    )
  }


}

export default GoogleMap;
