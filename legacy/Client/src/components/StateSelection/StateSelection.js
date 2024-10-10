import React, { useState, useEffect } from "react";
import { Map, Layer, Source } from "react-map-gl";
import * as ViewportUtilities from "../../utilities/ViewportUtilities";
import CACountiesGeoData from "../../data/CA/CountiesGeoData.json";
import StateSelectionToolbar from "./StateSelectionToolbar";
import "../../css/App.css";

const StateSelectionMap = () => {
  // Internal state for viewport and selected state
  const [mapViewport, setMapViewport] = useState(ViewportUtilities.UNSELECTED.Maximized);
  const [tentativeState, setTentativeState] = useState(ViewportUtilities.STATE_OPTIONS.UNSELECTED);

  useEffect(() => {
    // Populate state county data if needed (optional)
  }, []);

  const handleStateSelection = (state) => {
    switch (state) {
      case ViewportUtilities.STATE_OPTIONS.CALIFORNIA:
        setMapViewport(ViewportUtilities.CALIFORNIA.Maximized);
        setTentativeState(ViewportUtilities.STATE_OPTIONS.CALIFORNIA);
        break;
      case ViewportUtilities.STATE_OPTIONS.NEW_YORK:
        setMapViewport(ViewportUtilities.NEW_YORK.Maximized);
        setTentativeState(ViewportUtilities.STATE_OPTIONS.NEW_YORK);
        break;
      case ViewportUtilities.STATE_OPTIONS.MISSISSIPPI:
        setMapViewport(ViewportUtilities.MISSISSIPPI.Maximized);
        setTentativeState(ViewportUtilities.STATE_OPTIONS.MISSISSIPPI);
        break;
      default:
        setMapViewport(ViewportUtilities.UNSELECTED.Maximized);
        setTentativeState(ViewportUtilities.STATE_OPTIONS.UNSELECTED);
        break;
    }
  };

  return (
    <div>
      <StateSelectionToolbar
        onStateChange={handleStateSelection}
        tentativeState={tentativeState}
      />
      <Map
        className="map-display"
        {...mapViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setMapViewport(viewport)}
      >
        <Source id="ca-counties" type="geojson" data={CACountiesGeoData}>
          <Layer
            id="ca-counties-fill"
            type="fill"
            paint={{
              "fill-color": "yellow",
              "fill-opacity": 0.7,
            }}
          />
        </Source>
      </Map>
    </div>
  );
};

export default StateSelectionMap;
