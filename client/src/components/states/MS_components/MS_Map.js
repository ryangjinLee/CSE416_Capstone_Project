import React, { useEffect, useState } from "react";
import { Map, Layer, Source } from "react-map-gl";
import "./NY.css";

const NY_Map = (props) => {
  const [geoData, setGeoData] = useState(null); // State to store dynamically loaded GeoJSON data
  // Map district IDs to their initial colors
  const initialColors = {
    1: "blue",
    2: "blue",
    3: "blue",
    4: "red",
    
  };

  const [selectedDistrict, setSelectedDistrict] = useState(null); // Keep track of selected district

  const [layerOption, setLayerOption] = useState([
    "match",
    ["get", "name"],
    ...Object.entries(initialColors).flat(), // Spread initial colors for all districts
    "orange", // Default color for districts not matched
  ]);

  const [viewState, setViewState] = useState({
    latitude: 42.9538,
    longitude: -75.5268,
    zoom: 6,
  });

  const handleClick = (event) => {
    const feature = event.features[0]; // Get the first clicked feature
    if (feature && feature.properties) {
      const districtId = feature.id.toString();

      // Update the selected district state
      setSelectedDistrict(districtId);

      // Pass selected district to parent component
      props.setSelectedDistrict(districtId ? districtId : "Unknown District");

      // Update only the clicked district to black, all others retain their original color
      const updatedLayerOption = [
        "match",
        ["get", "name"],
        ...Object.entries(initialColors)
          .map(([id, color]) => [id, id === districtId ? "black" : color])
          .flat(),
        "orange",
      ];

      setLayerOption(updatedLayerOption); // Apply the new layer options
    }
  };

  // Dynamically import the appropriate GeoJSON file based on selectedOptionMap
  useEffect(() => {
    const loadGeoData = async () => {
      try {
        let data;
        switch (props.selectedOptionMap) {
          case "MMD2":
            data = await import("../../../data/NY/output2.json");
            break;
          case "MMD3":
            data = await import("../../../data/NY/output3.json");
            break;
          case "MMD4":
            data = await import("../../../data/NY/output4.json");
            break;
          case "MMD5":
            data = await import("../../../data/NY/output5.json");
            break;
          default:
            data = await import("../../../data/NY/output_SMD.json"); // Default to SMD
            break;
        }
        setGeoData(data.default); // Update geoData state with the loaded GeoJSON
      } catch (error) {
        console.error("Error loading GeoJSON data:", error);
      }
    };

    loadGeoData();
  }, [props.selectedOptionMap]); // Re-run effect when selectedOptionMap changes

  const handleViewStateChange = (newViewState) => {
    setViewState(newViewState); // Update view state to handle dragging and zooming
  };

  if (!geoData) {
    return <div>Loading Map...</div>; // Display a loading message while data is being fetched
  }

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
        <Source id="ny-counties" type="geojson" data={geoData}>
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