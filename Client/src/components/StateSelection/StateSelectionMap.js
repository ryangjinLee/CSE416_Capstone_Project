import React, { Component } from "react";
import { connect } from "react-redux";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import {
  setCurrentState,
  setTentativeState,
  setViewport,
  loadStateOutlines,
  restoreDefaultStateForNewDistricting,
  setDistrictingsAreConstrained,
} from "../../redux/actions/settingActions";
import * as ViewportUtilities from "../../utilities/ViewportUtilities";
import * as MapUtilities from "../../utilities/MapUtilities";
import * as NetworkingUtilities from "../../network/NetworkingUtilities";

//temp
import NYCountiesGeoData from '../../data/NY/CountiesGeoData.json';
import CACountiesGeoData from '../../data/CA/CountiesGeoData.json';
import MSCountiesGeoData from '../../data/MS/CountiesGeoData.json';


class StateSelectionMap extends Component {
  componentDidMount() {
    // Fresh start
    this.props.restoreDefaultStateForNewDistricting();
    this.props.setCurrentState(ViewportUtilities.STATE_OPTIONS.UNSELECTED);
    this.populateStateCounties();
  }

  async populateStateCounties() {
    NetworkingUtilities.loadStateOutlines().then((results) =>
      this.props.loadStateOutlines(results)
    );
  }

  _onClick = (event) => {
    const { features } = event;
    const hoveredFeature =
      features &&
      features.find(
        (f) =>
          f.layer.id === MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "NC" ||
          f.layer.id === MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "LA" ||
          f.layer.id === MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "TX" ||
          f.layer.id === "ny-counties-fill" ||
          f.layer.id === "ca-counties-fill" ||
          f.layer.id === "ms-counties-fill"
      );
    if (hoveredFeature != undefined) {
      switch (hoveredFeature.layer.id) {
        // case MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "NC":
        //   this.props.setViewport(ViewportUtilities.NORTH_CAROLINA.Maximized);
        //   this.props.setTentativeState(
        //     ViewportUtilities.STATE_OPTIONS.NORTH_CAROLINA
        //   );
        //   break;
        // case MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "LA":
        //   this.props.setViewport(ViewportUtilities.LOUISIANA.Maximized);
        //   this.props.setTentativeState(
        //     ViewportUtilities.STATE_OPTIONS.LOUISIANA
        //   );
        //   break;
        // case MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "TX":
        //   this.props.setViewport(ViewportUtilities.ALABAMA.Maximized);
        //   this.props.setTentativeState(ViewportUtilities.STATE_OPTIONS.ALABAMA);
        //   break;
        case "ny-counties-fill":
          this.props.setViewport(ViewportUtilities.NEW_YORK.Maximized);
          this.props.setTentativeState(ViewportUtilities.STATE_OPTIONS.NEW_YORK);
          break;
        case "ca-counties-fill":
          this.props.setViewport(ViewportUtilities.CALIFORNIA.Maximized);
          this.props.setTentativeState(ViewportUtilities.STATE_OPTIONS.CALIFORNIA);
          break;
        case "ms-counties-fill":
          this.props.setViewport(ViewportUtilities.MISSISSIPPI.Maximized);
          this.props.setTentativeState(ViewportUtilities.STATE_OPTIONS.MISSISSIPPI);
          break;
        default:
          this.props.setViewport(ViewportUtilities.UNSELECTED.Maximized);
          this.props.setTentativeState(
            ViewportUtilities.STATE_OPTIONS.UNSELECTED
          );
      }
    }
  };

  render() {
    if (this.props.StateCounties == null) {
      return (
        <div>
          <ReactMapGL
            className="map-display"
            {...this.props.MapViewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewport) => {
              this.props.setViewport(viewport);
            }}
            onClick={(e) => {}}
          />
        </div>
      );
    } else {
      /* Only load these if it's not empty*/
      // const NCCountyGeoData = this.props.StateCounties[
      //   ViewportUtilities.STATE_OPTIONS.NORTH_CAROLINA
      // ];
      // const LACountyGeoData = this.props.StateCounties[
      //   ViewportUtilities.STATE_OPTIONS.LOUISIANA
      // ];
      // const TXCountyGeoData = this.props.StateCounties[
      //   ViewportUtilities.STATE_OPTIONS.ALABAMA
      // ];
      const NYCountyGeoData = this.props.StateCounties[
        ViewportUtilities.STATE_OPTIONS.NEW_YORK
      ];
      const CACountyGeoData = this.props.StateCounties[
        ViewportUtilities.STATE_OPTIONS.CALIFORNIA
      ];
      return (
        <div>
          <ReactMapGL
            className="map-display"
            {...this.props.MapViewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewport) => {
              this.props.setViewport(viewport);
            }}
            onClick={this._onClick.bind(this)}
          >
            {/* <Source
              id={MapUtilities.IDs.COUNTY_SOURCE_ID + "NC"}
              type="geojson"
              data={NCCountyGeoData}
              generateId={true}
            />
            <Layer
              id={MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "NC"}
              type="fill"
              source={MapUtilities.IDs.COUNTY_SOURCE_ID + "NC"}
              paint={{
                "fill-color": "#abcdef",
                "fill-opacity": [
                  "case",
                  ["boolean", ["feature-state", "hover"], false],
                  0.1,
                  0.6,
                ],
              }}
            />
            <Source
              id={MapUtilities.IDs.COUNTY_SOURCE_ID + "LA"}
              type="geojson"
              data={LACountyGeoData}
              generateId={true}
            />
            <Layer
              id={MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "LA"}
              type="fill"
              source={MapUtilities.IDs.COUNTY_SOURCE_ID + "LA"}
              paint={{
                "fill-color": "#8effba",
                "fill-opacity": [
                  "case",
                  ["boolean", ["feature-state", "hover"], false],
                  0.1,
                  0.6,
                ],
              }}
            />
            <Source
              id={MapUtilities.IDs.COUNTY_SOURCE_ID + "TX"}
              type="geojson"
              data={TXCountyGeoData}
              generateId={true}
            />
            <Layer
              id={MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "TX"}
              type="fill"
              source={MapUtilities.IDs.COUNTY_SOURCE_ID + "TX"}
              paint={{
                "fill-color": "#2ea3fa",
                "fill-opacity": [
                  "case",
                  ["boolean", ["feature-state", "hover"], false],
                  0.1,
                  0.6,
                ],
              }}
            /> */}

              {/* temp */}
          <Source
            id="ny-counties"
            type="geojson"
            data={NYCountiesGeoData}
          >
            <Layer
              id="ny-counties-fill"
              type="fill"
              source="ny-counties"
              paint={{
                'fill-color': [
                  'match',
                  ['get', 'name'],
                  'Hamilton County', 'purple',
                  'Chenango County', 'purple',
                  'Livingston County', 'purple',
                  'Schuyler County', 'Red',
                  'Schoharie County', 'Blue',
                  'Rensselaer County', 'Red',
                  'Oneida County', 'Blue',
                  'Wayne County', 'Red',
                  'Suffolk County', 'Blue',
                  'Tioga County', 'Red',
                  'Rockland County', 'Blue',
                  'Wyoming County', 'Red',
                  'Oswego County', 'Blue',
                  'Orleans County', 'Red',
                  'Steuben County', 'Blue',
                  'Washington County', 'Red',
                  'St. Lawrence County', 'Blue',
                  'Warren County', 'Red',
                  'Westchester County', 'Blue',
                  'Tompkins County', 'Red',
                  'Otsego County', 'Blue',
                  'Chautauqua County', 'Red',
                  'Seneca County', 'Blue',
                  'Cayuga County', 'Red',
                  'Queens County', 'Blue',
                  'Essex County', 'Red',
                  'Ulster County', 'Blue',
                  'Sullivan County', 'Red',
                  'Chemung County', 'Blue',
                  'New York County', 'Blue',
                  'Monroe County', 'Red',
                  'Nassau County', 'Red',
                  'Onondaga County', 'Blue',
                  'Columbia County', 'Red',
                  'Dutchess County', 'Blue',
                  'Schenectady County', 'Red',
                  'Saratoga County', 'Blue',
                  'Greene County', 'Red',
                  'Ontario County', 'Blue',
                  'Delaware County', 'Red',
                  'Allegany County', 'Blue',
                  'Albany County', 'Blue',
                  'Bronx County', 'Red',
                  'Broome County', 'Blue',
                  'Clinton County', 'Red',
                  'Erie County', 'Blue',
                  'Jefferson County', 'Blue',
                  'Fulton County', 'Red',
                  'Madison County', 'Blue',
                  'Kings County', 'Red',
                  'Genesee County', 'Blue',
                  'Lewis County', 'Red',
                  'Franklin County', 'Blue',
                  'Montgomery County', 'Red',
                  'Orange County', 'Red',
                  'Yates County', 'Blue',
                  'Cortland County', 'Red',
                  'Richmond County', 'Blue',
                  'Cattaraugus County', 'Red',
                  'Herkimer County', 'Blue',
                  'Niagara County', 'Red',
                  'Putnam County', 'Blue',


                  
                  'Blue'  // default color for other counties
                ],
                'fill-opacity': 0.7
              }}
            />
          </Source>

          {/* For CA */}
          <Source
            id="ca-counties"
            type="geojson"
            data={CACountiesGeoData}
          >
            <Layer
              id="ca-counties-fill"
              type="fill"
              source="ca-counties"
              paint={{
                'fill-color': [
                  'match',
                  ['get', 'name'],
                  'Nevada', 'red',
                  'Monterey', 'green',
                  'San Benito', 'blue',
                
                  
                  'yellow'  // default color for other counties
                ],
                'fill-opacity': 0.7
              }}
            />
          </Source>

          {/* For MS */}
          <Source
            id="ms-counties"
            type="geojson"
            data={MSCountiesGeoData}
          >
            <Layer
              id="ms-counties-fill"
              type="fill"
              source="ms-counties"
              paint={{
                'fill-color': 'orange',
                'fill-opacity': 0.7
              }}
            />
          </Source>
              {/* temp end */}

            <Source
              id={MapUtilities.IDs.COUNTY_SOURCE_ID + "NY"}
              type="geojson"
              data={NYCountyGeoData}
              generateId={true}
            />
            <Layer
              id={MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "NY"}
              type="fill"
              source={MapUtilities.IDs.COUNTY_SOURCE_ID + "NY"}
              paint={{
                "fill-color": "#ff9900",
                "fill-opacity": 0.6,
                "fill-outline-color": "#000000"
              }}
            />

            <Source
              id={MapUtilities.IDs.COUNTY_SOURCE_ID + "CA"}
              type="geojson"
              data={CACountyGeoData || CACountiesGeoData}
              generateId={true}
            />
            <Layer
              id={MapUtilities.IDs.COUNTY_FILL_LAYER_ID + "CA"}
              type="fill"
              source={MapUtilities.IDs.COUNTY_SOURCE_ID + "CA"}
              paint={{
                'fill-color': [
                  'match',
                  ['get', 'name'],
                  'Nevada County', 'red',
                  'Monterey County', 'green',
                  'San Benito County', 'blue',
                  
                  'yellow'  // default color for other counties
                ],
                'fill-opacity': 0.6,
                'fill-outline-color': '#000000'
              }}
            />
          </ReactMapGL>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentState: (state) => {
      dispatch(setCurrentState(state));
    },
    setViewport: (viewport) => {
      dispatch(setViewport(viewport));
    },
    setTentativeState: (state) => {
      dispatch(setTentativeState(state));
    },
    loadStateOutlines: (dict) => {
      dispatch(loadStateOutlines(dict));
    },
    setDistrictingsAreConstrained: (bool) => {
      dispatch(setDistrictingsAreConstrained(bool));
    },
    restoreDefaultStateForNewDistricting: () => {
      dispatch(restoreDefaultStateForNewDistricting());
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    MapViewport: state.MapViewport,
    StateCounties: state.StateCounties,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StateSelectionMap);
