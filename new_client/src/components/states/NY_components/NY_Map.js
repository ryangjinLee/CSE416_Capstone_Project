import React, { useState, useEffect } from "react";
import { Map, Layer, Source } from "react-map-gl";
import NYCountiesGeoData from "../../../data/NY/CountiesGeoData.json";
import "./NY.css";

const NY_Map = () => {
  const mapViewport = {
    latitude: 42.9538,
    longitude: -75.5268,
    zoom: 6,
    width: "75vw",
    height: window.innerHeight,
  };

  //   여기에 색갈멸로 Select an Option 에서 SMD/MMD2/MMD3/MMD4/MMD5 바뀌면
  //    어떻게 나뉘었는지데로 색칠해서 District 나누기
  return (
    <>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...mapViewport}
        mapStyle="mapbox://styles/mapbox/light-v9"
        style={{ width: "800px", height: "700px" }}
        className="justify-center"
      >
        <Source id="ny-counties" type="geojson" data={NYCountiesGeoData}>
          <Layer
            id="ny-counties-fill"
            type="fill"
            source="ny-counties"
            paint={{
              "fill-color": "orange",
              "fill-opacity": 0.7,
            }}
          />
        </Source>
      </Map>
    </>
  );
};

export default NY_Map;
