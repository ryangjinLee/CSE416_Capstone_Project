import React, { useEffect, useState } from "react";
import { Map, Layer, Source } from "react-map-gl";
import NYCountiesGeoData from "../../../data/NY/output.json";
import "./NY.css";

const NY_Map = (props) => {
  const [layerOption, setLayerOption] = useState([
    "match",
    ["get", "name"],
    "0",
    "blue",
    "1",
    "red",
    "orange",
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
      props.setSelectedDistrict(districtId ? districtId : "Unknoswn District");
      switch (props.selectedOptionMap) {
        case "SMD":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(),
            "blue",
            "orange",
          ]);
          break;

        case "MMD2":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(),
            "blue",
            (districtId + 1).toString(),
            "blue",
            "orange",
          ]);
          break;

        case "MMD3":
          if (districtId >= 1 && districtId <= 3) {
            setLayerOption([
              "match",
              ["get", "name"],
              "1",
              "blue",
              "2",
              "blue",
              "3",
              "blue",
              "orange",
            ]);
          } else if (districtId >= 4 && districtId <= 6) {
            setLayerOption([
              "match",
              ["get", "name"],
              "4",
              "blue",
              "5",
              "blue",
              "6",
              "blue",
              "orange",
            ]);
          } else if (districtId >= 7 && districtId <= 9) {
            setLayerOption([
              "match",
              ["get", "name"],
              "7",
              "blue",
              "8",
              "blue",
              "9",
              "blue",
              "orange",
            ]);
          } else if (districtId >= 10 && districtId <= 12) {
            setLayerOption([
              "match",
              ["get", "name"],
              "10",
              "blue",
              "11",
              "blue",
              "12",
              "blue",
              "orange",
            ]);
          } else if (districtId >= 13 && districtId <= 15) {
            setLayerOption([
              "match",
              ["get", "name"],
              "13",
              "blue",
              "14",
              "blue",
              "15",
              "blue",
              "orange",
            ]);
          } else if (districtId >= 16 && districtId <= 18) {
            setLayerOption([
              "match",
              ["get", "name"],
              "16",
              "blue",
              "17",
              "blue",
              "18",
              "blue",
              "orange",
            ]);
          } else if (districtId >= 19 && districtId <= 21) {
            setLayerOption([
              "match",
              ["get", "name"],
              "19",
              "blue",
              "20",
              "blue",
              "21",
              "blue",
              "orange",
            ]);
          } else if (
            districtId === 22 ||
            districtId === 24 ||
            districtId === 25
          ) {
            setLayerOption([
              "match",
              ["get", "name"],
              "22",
              "blue",
              "24",
              "blue",
              "25",
              "blue",
              "orange",
            ]);
          } else if (districtId >= 23 && districtId <= 26) {
            setLayerOption([
              "match",
              ["get", "name"],
              "23",
              "blue",
              "26",
              "blue",
              "orange",
            ]);
          }

          break;

        case "MMD4":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(),
            "blue",
            (districtId + 1).toString(),
            "blue",
            (districtId + 2).toString(),
            "blue",
            (districtId + 3).toString(),
            "blue",
            "orange",
          ]);
          break;

        case "MMD5":
          if (districtId >= 1 && districtId <= 5) {
            setLayerOption([
              "match",
              ["get", "name"],
              "1",
              "blue",
              "2",
              "blue",
              "3",
              "blue",
              "4",
              "blue",
              "5",
              "blue",
              "orange",
            ]);
          } else if (
            (districtId >= 6 && districtId <= 9) ||
            districtId === 11
          ) {
            setLayerOption([
              "match",
              ["get", "name"],
              "6",
              "blue",
              "7",
              "blue",
              "8",
              "blue",
              "9",
              "blue",
              "11",
              "blue",
              "orange",
            ]);
          } else if (
            (districtId >= 12 && districtId <= 15) ||
            districtId === 10
          ) {
            setLayerOption([
              "match",
              ["get", "name"],
              "10",
              "blue",
              "12",
              "blue",
              "13",
              "blue",
              "14",
              "blue",
              "15",
              "blue",
              "orange",
            ]);
          } else if (districtId >= 16 && districtId <= 20) {
            setLayerOption([
              "match",
              ["get", "name"],
              "16",
              "blue",
              "17",
              "blue",
              "18",
              "blue",
              "19",
              "blue",
              "20",
              "blue",
              "orange",
            ]);
          } else if (
            (districtId >= 21 && districtId <= 22) ||
            districtId === 24 ||
            districtId === 25
          ) {
            setLayerOption([
              "match",
              ["get", "name"],
              "21",
              "blue",
              "22",
              "blue",
              "24",
              "blue",
              "25",
              "blue",
              "orange",
            ]);
          } else if (districtId === 23 || districtId === 26) {
            setLayerOption([
              "match",
              ["get", "name"],
              "23",
              "blue",
              "26",
              "blue",
              "orange",
            ]);
          }

          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    console.log("hello");
    console.log(layerOption);
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
