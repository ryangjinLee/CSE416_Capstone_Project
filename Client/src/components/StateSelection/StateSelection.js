import React, { Component } from "react";
import StateSelectionMap from "./StateSelectionMap";
import StateSelectionToolbar from "./StateSelectionToolbar";
import "../../css/App.css";

export default class StateSelection extends Component {
  render() {
    return (
      <div className="full-screen-flex-container">
        <div className="map-limiter">
          <StateSelectionMap />
        </div>
        <StateSelectionToolbar />
      </div>
    );
  }
}
