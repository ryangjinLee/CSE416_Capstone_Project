import React, {useEffect, useState} from "react";
import { Map, Layer, Source } from "react-map-gl";
import NYCountiesGeoData from "../../../data/NY/output.json";
import "./NY.css";

const NY_Map = (props) => {
  const [layerOption, setLayerOption] = useState([
    "match",
    ["get", "name"],
    "0", "blue",
    "orange"
  ]);
  const [viewState, setViewState] = useState({
    latitude: 42.9538,
    longitude: -75.5268,
    zoom: 6,
  });

  const handleClick = (event) => {
    const feature = event.features[0]; // Get the first clicked feature
    if (feature && feature.properties) {
      const districtId = feature.id;
      props.setSelectedDistrict(districtId ? districtId : 'Unknown District');
      setLayerOption([
        "match",
        ["get", "name"],
        districtId.toString(), "blue",
        "orange"
      ])
    }
  };

  useEffect(() => {
    console.log('hello')
    console.log(layerOption)
  }, [layerOption]);

  const handleViewStateChange = (newViewState) => {
    setViewState(newViewState); // Update view state to handle dragging and zooming
  };

  return (
    <>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={viewState}
        mapStyle="mapbox://styles/mapbox/light-v9"
        style={{ width: "800px", height: "600px" }}
        className="justify-center"
        interactiveLayerIds={["ny-counties-fill"]}
        onClick={handleClick}
        onMove={(evt) => handleViewStateChange(evt.viewState)} // Handle dragging
        onZoom={(evt) => handleViewStateChange(evt.viewState)} // Handle zooming
      >
        {/* Source for the counties */}
        <Source id="ny-counties" type="geojson" data={NYCountiesGeoData}>
          {/* Layer to color fill counties */}
          <Layer
              id="ny-counties-fill"
              type="fill"
              source="ny-counties"
              paint={{
                "fill-color": layerOption,
                "fill-opacity": 0.7,
              }}
          />

          {/* Layer for the county borders */}
          <Layer
            id="ny-counties-borders"
            type="line"
            source="ny-counties"
            paint={{
              "line-color": "black", // Black borders for the counties
              "line-width": 1, // Thickness of the borders
            }}
          />
        </Source>
      </Map>

    </>
  );
};

export default NY_Map;
