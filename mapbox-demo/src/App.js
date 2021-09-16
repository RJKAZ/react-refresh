import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';
// eslint-disable-next-line import/no-webpack-loader-syntax

function App() {
  const [viewport, setViewport] = useState({
    latitude: 43,
    longitude: -79,
    width: '100vw',
    height: '100vh',
    zoom: 5,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        markers here
      </ReactMapGL>
    </div>
  );
}

export default App;
