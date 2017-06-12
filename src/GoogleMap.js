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
  mapTypeControl: true,
  fullscreenControl: false
};
}

class GoogleMap extends Component {

	constructor(props, context) {
    super(props, context);
    this.state = {
      center: this.props.center,
      cycloLat: 0,
      cycloLng: 0,
      cyclistChange: [],
      closePopup: false
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
          cyclistChange: body.data
        }), 1001);
      })
  }

  onMessage(message) {
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

  _onClick() {
    console.log("popup");
    this.setState({
        closePopup: true
    })
  }

  loadRaamTrack(map) {
	map.data.loadGeoJson('raam2x.json');
	map.data.setStyle({
	  strokeColor: "#051392",
	  strokeWeight: 2
	});
  }

  render() {
    const cyclistChange = this.state.cyclistChange;
    const map = this;
		return (
			<MapContainer height={this.props.height}>
			   <GoogleMapReact
          options={createMapOptions}
          center={this.state.center}
          onChange={this._onChange.bind(this)}
          onClick={this._onClick.bind(this)}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{key: "AIzaSyAf7QBjbsRt6Hv-aixRFPr_9f-WjSNkAWs", language:"fr"}}

          onGoogleApiLoaded={({map, maps}) => this.loadRaamTrack(map)}
          yesIWantToUseGoogleMapApiInternals
          >
			    	<CycloMarker lat={this.state.cycloLat} lng={this.state.cycloLng} radius={15} />
            {
              cyclistChange.map(function (data, index) {
                return <GMM key={index} lat={data.latitude} lng={data.longitude} name={data.contestant} time={data.localTime} radius={10} closePopup={map.state.closePopup} />
              })
            }
			   </GoogleMapReact>
         <Event event='teampulse' handler={this.onMessage} />
			</MapContainer>
    )
  }


}

export default GoogleMap;
