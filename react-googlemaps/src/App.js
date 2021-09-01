import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  rende() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer);

// https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications
