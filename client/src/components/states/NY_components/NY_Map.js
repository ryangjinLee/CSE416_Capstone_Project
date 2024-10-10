import React, { useState } from "react";
import { Map, Layer, Source } from "react-map-gl";
import NYCountiesGeoData from "../../../data/NY/NYS_Congressional_Districts_1248143431698889131.geojson";
import "./NY.css";

const NY_Map = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("Click on District");
  const [viewState, setViewState] = useState({
    latitude: 42.9538,
    longitude: -75.5268,
    zoom: 6,
  });

  const handleClick = (event) => {
    const feature = event.features[0]; // Get the first clicked feature
    if (feature) {
      const districtId =
        feature.properties.district_id ||
        feature.properties.id ||
        feature.properties.name;
      setSelectedDistrict(districtId);
    }
  };

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
              "fill-color": [
                "case",
                ["==", ["get", "id"], selectedDistrict], // If selected, make green
                "orange",
                "orange", // Default color for unselected counties
              ],
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
              "line-width": 2, // Thickness of the borders
            }}
          />
        </Source>
      </Map>

      {selectedDistrict && (
        <div>
          <h2>Selected District: {selectedDistrict}</h2>
        </div>
      )}
    </>
  );
};

export default NY_Map;
