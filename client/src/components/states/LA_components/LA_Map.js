import React, { useEffect, useState } from "react";
import { Map, Layer, Source } from "react-map-gl";
import LACountiesGeoData_SMD from "../../../data/LA/output5.json";
import "./LA.css";

const LA_Map = (props) => {
  const [geoData, setGeoData] = useState(null); // State to store dynamically loaded GeoJSON data
  // Map district IDs to their initial colors
  const initialColors = {
    1: "red",
    2: "blue",
    3: "red",
    4: "blue",
    5: "red",
    6: "blue",
    7: "blue",
    8: "blue",
    9: "red",
    10: "blue",
    11: "red",
    12: "blue",
    13: "red",
    14: "blue",
    15: "blue",
    16: "blue",
    17: "blue",
    18: "blue",
    19: "blue",
    20: "red",
    21: "blue",
    22: "red",
    23: "red",
    24: "blue",
    25: "blue",
    26: "blue",
    27: "red",
    28: "blue",
    29: "blue",
    30: "blue",
    31: "blue",
    32: "blue",
    33: "blue",
    34: "blue",
    35: "blue",
    36: "blue",
    37: "blue",
    38: "blue",
    39: "blue",
    40: "red",
    41: "red",
    42: "blue",
    43: "blue",
    44: "blue",
    45: "red",
    46: "blue",
    47: "red",
    48: "red",
    49: "blue",
    50: "blue",
    51: "blue",
    52: "blue",
  };

  const [selectedDistrict, setSelectedDistrict] = useState(null); // Keep track of selected district

  const [layerOption, setLayerOption] = useState([
    "match",
    ["get", "name"],
    ...Object.entries(initialColors).flat(), // Spread initial colors for all districts
    "orange", // Default color for districts not matched
  ]);

  const [viewState, setViewState] = useState({
    latitude: 36.7783,
    longitude: -119.4179,
    zoom: 5,
  });

  const handleClick = (event) => {
    const feature = event.features[0]; // Get the first clicked feature
    if (feature && feature.properties) {
      console.log(feature)
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
            data = await import("../../../data/LA/output2.json");
            break;
          case "MMD3":
            data = await import("../../../data/LA/output3.json");
            break;
          case "MMD4":
            data = await import("../../../data/LA/output4.json");
            break;
          case "MMD5":
            data = await import("../../../data/LA/output5.json");
            break;
          default:
            data = await import("../../../data/LA/output_SMD.json"); // Default to SMD
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
        interactiveLayerIds={["LA-counties-fill"]}
        onClick={handleClick}
        onMove={(evt) => handleViewStateChange(evt.viewState)} // Handle dragging
        onZoom={(evt) => handleViewStateChange(evt.viewState)} // Handle zooming
      >
        {/* Source for the counties */}
        <Source id="LA-counties" type="geojson" data={geoData}>
          {/* Layer to color fill counties */}
          <Layer
            id="LA-counties-fill"
            type="fill"
            source="LA-counties"
            paint={{
              "fill-color": layerOption,
              "fill-opacity": 0.7,
            }}
          />

          {/* Layer for the county borders */}
          <Layer
            id="LA-counties-borders"
            type="line"
            source="LA-counties"
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

export default LA_Map;