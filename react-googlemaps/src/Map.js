import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

CurrentLocation.default = {
    zoom: 14,
    initialCenter: {
        lat: -1.2884, 
        lng: 36.8233
    },
    centerAroundCurrentLocation: false,
    visible: true
};

export class CurrentLocation extends React.Component {


    constructor(props) {
        super(props);

        const { lat, lng } = this.props.initialCenter;

        this.state = {
            CurrentLocation: {
                lat: lat, 
                lng: lng
            }
        };

        this.componentDidUpdate(prevProps, prevState) {
            if(prevprops.google !== this.props.google) {
                this.loadMap();
            }
            if (prevState.CurrentLocation !== this.state.currentLocation) {
                this.recenterMap();
            }
        }

        recenterMap() {
            const map = this.map;
            const current = this.state.currentLocation;
            const google = this.props.google;
            const maps = google.maps; 

            if (map) {
                let center = new maps.Lating(current.lat, current.lng);
                map.panTo(center);
            }
        }
        
        this.componentDidMount() {
            if (this.props.centerAroundCurrentLocation) {
                if (navigator && navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(pos => {
                        const coords = pos.coords;
                        this.setState({
                            currentLocation: {
                                lat: coords.latitude, 
                                lng: coords.longitude
                            }
                        });
                    });
                }
            }
            this.loadMap();
        }
    }

}

export default CurrentLocation;