import React, { useState, useEffect } from "react";
import { Map, Layer, Source } from "react-map-gl";
import NYCountiesGeoData from "../../data/NY/CountiesGeoData.json";
import LACountiesGeoData from "../../data/LA/CountiesGeoData.json";
import MSCountiesGeoData from "../../data/MS/CountiesGeoData.json";
import "./Components.css";
import { getData } from "../../api";

const MapBox = ({ selectedState }) => {
  const [mapViewport, setMapViewport] = useState({
    latitude: 40.29091544906472,
    longitude: -97.44332861851478,
    width: "75vw",
    height: window.innerHeight,
    zoom: 3.75,
  });
  const [geoData, setGeoData] = useState(null);
  const handlemapViewportChange = (NewMapViewport) => {
    setMapViewport(NewMapViewport); // Update view state to handle dragging and zooming
  };

  useEffect(() => {
    switch (selectedState) {
      case "California":
        setMapViewport({
          latitude: 36.7783,
          longitude: -119.4179,
          zoom: 5.5,
          //   width: "75vw",
          height: window.innerHeight,
        });
        setGeoData(LACountiesGeoData);
        break;
      case "NewYork":
        setMapViewport({
          latitude: 42.9538,
          longitude: -75.5268,
          zoom: 6.5,
          //   width: "75vw",
          height: window.innerHeight,
        });
        setGeoData(NYCountiesGeoData);
        break;
      case "Mississippi":
        setMapViewport({
          latitude: 32.3547,
          longitude: -89.3985,
          zoom: 6,
          //   width: "75vw",
          height: window.innerHeight,
        });
        setGeoData(MSCountiesGeoData);
        break;
      default:
        setMapViewport({
          latitude: 40.29091544906472,
          longitude: -97.44332861851478,
          zoom: 3.75,
          //   width: "75vw",
          height: window.innerHeight,
        });
        setGeoData(null);
        break;
    }
  }, [selectedState]);

  return (
    <>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...mapViewport}
        mapStyle="mapbox://styles/mapbox/light-v9"
        style={{ width: "90vw", height: "100vh" }}
        onMove={(evt) => handlemapViewportChange(evt.viewState)} // Handle dragging
        onZoom={(evt) => handlemapViewportChange(evt.viewState)} // Handle zooming
      >
        <Source id="ca-counties" type="geojson" data={LACountiesGeoData}>
          <Layer
            id="ca-counties-fill"
            type="fill"
            source="ca-counties"
            paint={{
              "fill-color": "orange",
              "fill-opacity": 0.7,
            }}
          />
        </Source>
        <Source id="ms-counties" type="geojson" data={MSCountiesGeoData}>
          <Layer
            id="ms-counties-fill"
            type="fill"
            source="ms-counties"
            paint={{
              "fill-color": "orange",
              "fill-opacity": 0.7,
            }}
          />
        </Source>

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

export default MapBox;
