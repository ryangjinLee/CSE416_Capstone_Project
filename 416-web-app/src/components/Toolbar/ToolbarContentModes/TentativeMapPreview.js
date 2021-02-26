import React, { Component } from 'react'
import ReactMapGL, { Layer, Source } from "react-map-gl"
import { connect } from 'react-redux'
import * as MapUtilities from '../../../utilities/MapUtilities'

function TentativeMapPreview(props) {
    const viewport = {
        latitude : MapUtilities.NC.LATTITUDE, 
        longitude: MapUtilities.NC.LONGITUDE,
        width: "400px",
        height: "200px",
        zoom: 4.8
    }
    return (
        <div>
        <h6 className="title-text">Preview</h6>
        <ReactMapGL 
                className = "map-display"
                {...viewport} 
                mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
            >
        <Source
            id = "DistrictGeoData"
            type = "geojson"
            data =  {props.TentativeDistricting.geoJson}/>
        <Layer
            id = {"district-fill-layer"}
            type="fill"
            source="DistrictGeoData"
            paint={{
            "fill-color" : ["rgb",["get","rgb-R"], ["get","rgb-G"], ["get","rgb-B"]],
            "fill-opacity": .5
            }}/>
        <Layer
            id = {"district-outline-layer"}
            type = "line"
            source="DistrictGeoData"
            paint={{
                "line-opacity": 1
            }}/>
            </ReactMapGL>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        TentativeDistricting : state.TentativeDistricting
    }
  }

export default connect(mapStateToProps)(TentativeMapPreview)