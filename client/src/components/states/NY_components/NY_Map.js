import React, { useEffect, useState } from "react";
import { Map, Layer, Source } from "react-map-gl";
import NYCountiesGeoData_SMD from "../../../data/NY/output_SMD.json";
import "./NY.css";

const NY_Map = (props) => {
  const [layerOption, setLayerOption] = useState([
    "match",
    ["get", "name"],
    "0",
    "blue",
    "1",
    "blue",
    "2",
    "blue",
    "3",
    "blue",
    "4",
    "red",
    "5",
    "red",
    "6",
    "red",
    "7",
    "red",
    "8",
    "red",
    "9",
    "red",
    "10",
    "red",
    "11",
    "red",
    "12",
    "red",
    "13",
    "red",
    "14",
    "red",
    "15",
    "red",
    "16",
    "red",
    "17",
    "red",
    "18",
    "red",
    "19",
    "red",
    "20",
    "red",
    "21",
    "blue",
    "22",
    "red",
    "23",
    "blue",
    "24",
    "blue",
    "25",
    "red",
    "26",
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

            districtId.toString(), "black",
            "orange"
          ])
          break;

        case "MMD2":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(), "black",
            (districtId === 9 || districtId === 10)
              ? (districtId + 2).toString()
              : (districtId === 11 || districtId === 12)
                ? (districtId - 2).toString()
                : (districtId === 26)
                  ? (districtId - 3).toString()
                  : (districtId === 23)
                    ? (districtId + 3).toString()
                    : (districtId === 25)
                      ? (districtId - 1).toString()
                      : (districtId === 24)
                        ? (districtId + 1).toString()
                        : (districtId % 2 === 0)
                          ? (districtId - 1).toString()
                          : (districtId + 1).toString(),
            "black",
            "orange"
          ]);
          break;

        case "MMD3":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(), "black",
            (districtId + 1).toString(), "black",
            (districtId + 2).toString(), "black",
            "orange"
          ]);
          break;

        case "MMD4":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(), "black",
            (districtId === 1 || districtId === 5 || districtId === 9 || districtId === 13 || districtId === 17)
              ? [(districtId + 1).toString(), (districtId + 2).toString(), (districtId + 3).toString()]
              : (districtId === 2 || districtId === 6 || districtId === 10 || districtId === 14 || districtId === 18)
                ? [(districtId - 1).toString(), (districtId + 1).toString(), (districtId + 2).toString()]
                : (districtId === 3 || districtId === 7 || districtId === 11 || districtId === 15 || districtId === 19)
                  ? [(districtId - 1).toString(), (districtId + 1).toString(), (districtId - 2).toString()]
                  : (districtId === 4 || districtId === 8 || districtId === 12 || districtId === 16 || districtId === 20)
                    ? [(districtId - 1).toString(), (districtId - 2).toString(), (districtId - 3).toString()]
                    : (districtId === 21)
                      ? [(districtId + 1).toString(), (districtId + 3).toString(), (districtId + 4).toString()]
                      : (districtId === 22)
                        ? [(districtId - 1).toString(), (districtId + 2).toString(), (districtId + 3).toString()]
                        : (districtId === 23)
                          ? [(districtId + 3).toString()]
                          : (districtId === 24)
                            ? [(districtId - 3).toString(), (districtId - 2).toString(), (districtId + 1).toString()]
                            : (districtId === 25)
                              ? [(districtId - 4).toString(), (districtId - 3).toString(), (districtId - 1).toString()]
                              : (districtId === 26)
                                ? [(districtId - 3).toString()]
                                : [(districtId + 1).toString(), (districtId + 2).toString(), (districtId + 3).toString()],
            "black",
            "orange"
          ]);
          break;

        case "MMD5":
          setLayerOption([
            "match",
            ["get", "name"],
            districtId.toString(), "black",
            (districtId + 1).toString(), "black",
            (districtId + 2).toString(), "black",
            (districtId + 3).toString(), "black",
            (districtId + 4).toString(), "black",
            "orange"
          ]);
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
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
        <Source id="ny-counties" type="geojson" data={NYCountiesGeoData_SMD}>
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
