import React from "react";
import Map from 'react-map-gl';

const MapBox = () => {
    return (
        <Map
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            initialViewState={{
                longitude: -95,
                latitude: 37,
                zoom: 3.5,
            }}
            style={{width: '100vw', height: '60vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        />
    );
}

export default MapBox;
