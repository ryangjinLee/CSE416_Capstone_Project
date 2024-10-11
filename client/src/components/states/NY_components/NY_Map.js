import React, {useEffect, useState} from "react";
import { Map, Layer, Source } from "react-map-gl";
import NYCountiesGeoData from "../../../data/NY/output.json";
import "./NY.css";

const NY_Map = (props) => {
  const [layerOption, setLayerOption] = useState([
    "match",
    ["get", "name"],
    "0", "blue",
    "1", "blue",
    "2", "blue",
    "3", "blue",
    "4", "red",
    "5", "red",
    "6", "red",
    "7", "red",
    "8", "red",
    "9", "red",
    "10", "red",
    "11", "red",
    "12", "red",
    "13", "red",
    "14", "red",
    "15", "red",
    "16", "red",
    "17", "red",
    "18", "red",
    "19", "red",
    "20", "red",
    "21", "blue",
    "22", "red",
    "23", "blue",
    "24", "blue",
    "25", "red",
    "26", "red",
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
      props.setSelectedDistrict(districtId ? districtId : 'Unknoswn District');
      switch (props.selectedOptionMap) {
        case "SMD":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(), "blue",
            "orange"
          ])
          break;

        case "MMD2":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(), "blue",
            (districtId === 25 || districtId === 22)
              ? (districtId - 1).toString()
              : (districtId + 1).toString(), "blue",
            "orange"
          ]);
          break;

        case "MMD3":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(), "blue",
            (districtId + 1).toString(), "blue",
            (districtId + 2).toString(), "blue",
            "orange"
          ]);
          break;

        case "MMD4":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(), "blue",
            (districtId === 11)
              ? [(districtId - 1).toString(), (districtId - 2).toString(), (districtId - 3).toString()]
              : (districtId === 20)
                ? [(districtId - 1).toString(), (districtId + 1).toString(), (districtId + 2).toString()]
                : (districtId === 25)
                  ? [(districtId - 1).toString(), (districtId + 1).toString(), (districtId - 2).toString()]
                  : [(districtId + 1).toString(), (districtId + 2).toString(), (districtId + 3).toString()],
            "blue",
            "orange"
          ]);
          break;

        case "MMD5":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(), "blue",
            (districtId + 1).toString(), "blue",
            (districtId + 2).toString(), "blue",
            (districtId + 3).toString(), "blue",
            (districtId + 4).toString(), "blue",
            "orange"
          ]);
          break;

        default:
          break;
      }
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
