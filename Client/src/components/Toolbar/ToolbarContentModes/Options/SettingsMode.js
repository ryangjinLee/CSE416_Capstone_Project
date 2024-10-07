import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import * as ToolbarUtilities from "../../../../utilities/ToolbarUtilities.js";
import { connect } from "react-redux";
import {
  togglePrecinctSwitch,
  toggleDistrictSwitch,
  toggleCountySwitch,
  toggleEnactedSwitch,
} from "../../../../redux/actions/settingActions";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import * as MapUtilities from "../../../../utilities/MapUtilities";
import styled from "styled-components";

// Styled component for the custom switch
const CustomSwitch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100px;
  height: 23px;
  background-color: ${(props) => (props.checked ? "#ff4c4c" : "#ccc")};
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &::before {
    content: "${(props) => (props.checked ? "On" : "Off")}";
    position: absolute;
    left: ${(props) => (props.checked ? "32px" : "8px")};
    top: 6px;
    font-size: 8px;
    color: white;
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: ${(props) => (props.checked ? "78px" : "8px")};
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s ease;
  }
`;

class SettingsMode extends Component {
  render() {
    return (
      <div className="ToolbarContent">
        <h5 className="align_text underline">Toggles</h5>
        <Col s={8}>
          <Row>
            <b>{ToolbarUtilities.LABELS.TOGGLE_PRECINCT_DISPLAY_LABEL}</b>
          </Row>
          <Row>
            <b>{ToolbarUtilities.LABELS.TOGGLE_COUNTY_DISPLAY_LABEL}</b>
          </Row>
          <Row>
            <b>{ToolbarUtilities.LABELS.TOGGLE_DISTRICT_DISPLAY_LABEL}</b>
          </Row>
          <Row>
            <b>{ToolbarUtilities.LABELS.TOGGLE_ENACTED_DISPLAY_LABEL}</b>
          </Row>
        </Col>
        <Col>
          <Row>
            <CustomSwitch
              checked={this.props.DisplayPrecincts}
              onClick={() =>
                this.props.togglePrecinctSwitch(!this.props.DisplayPrecincts)
              }
              disabled={this.props.PrecinctsGeoJson == null}
            />
          </Row>
          <Row>
            <CustomSwitch
              checked={this.props.DisplayCounties}
              onClick={() =>
                this.props.toggleCountySwitch(!this.props.DisplayCounties)
              }
              disabled={this.props.CountiesGeoJson == null}
            />
          </Row>
          <Row>
            <CustomSwitch
              checked={this.props.DisplayDistricts}
              onClick={() =>
                this.props.toggleDistrictSwitch(!this.props.DisplayDistricts)
              }
            />
          </Row>
          <Row>
            <CustomSwitch
              checked={this.props.DisplayEnacted}
              onClick={() =>
                this.props.toggleEnactedSwitch(!this.props.DisplayEnacted)
              }
            />
          </Row>
        </Col>
        {this.props.DisplayEnacted ? (
          <div className="centerWithinMe lowerMap">
            <h5>Enacted Districting</h5>
            <ReactMapGL
              className="map-display"
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              {...this.props.MapViewport}
              width="400px"
              height="200px"
              zoom={this.props.MapViewport.zoom - 1.5}
              ref={this.props.MapRef}
            >
              {this.props.EnactedGeoJson != null ? (
                <div>
                  <Source
                    id={MapUtilities.IDs.ENACTED_SOURCE_ID}
                    type="geojson"
                    data={this.props.EnactedGeoJson}
                    generateId={true}
                  />
                  <Layer
                    id={MapUtilities.IDs.ENACTED_DISTRICT_FILL_LAYER_ID}
                    type="fill"
                    source={MapUtilities.IDs.ENACTED_SOURCE_ID}
                    layout={{
                      visibility: this.props.DisplayEnacted
                        ? "visible"
                        : "none",
                    }}
                    paint={{
                      "fill-color": [
                        "rgb",
                        ["get", "rgb-R"],
                        ["get", "rgb-G"],
                        ["get", "rgb-B"],
                      ],
                      "fill-opacity": [
                        "case",
                        ["boolean", ["feature-state", "hover"], false],
                        0.6,
                        0.3,
                      ],
                    }}
                  />
                  <Layer
                    id={MapUtilities.IDs.ENACTED_DISTRICT_LINE_LAYER_ID}
                    type="line"
                    source={MapUtilities.IDs.ENACTED_SOURCE_ID}
                    layout={{
                      visibility: this.props.DisplayEnacted
                        ? "visible"
                        : "none",
                    }}
                    paint={{
                      "line-opacity": 1,
                    }}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </ReactMapGL>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePrecinctSwitch: (bool) => {
      dispatch(togglePrecinctSwitch(bool));
    },
    toggleCountySwitch: (bool) => {
      dispatch(toggleCountySwitch(bool));
    },
    toggleDistrictSwitch: (bool) => {
      dispatch(toggleDistrictSwitch(bool));
    },
    toggleEnactedSwitch: (bool) => {
      dispatch(toggleEnactedSwitch(bool));
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    DisplayPrecincts: state.DisplayPrecincts,
    DisplayDistricts: state.DisplayDistricts,
    DisplayCounties: state.DisplayCounties,
    DisplayEnacted: state.DisplayEnacted,
    EnactedGeoJson: state.EnactedGeoJson,
    PrecinctsGeoJson: state.PrecinctsGeoJson,
    CountiesGeoJson: state.CountiesGeoJson,
    MapViewport: state.MapViewport,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMode);
