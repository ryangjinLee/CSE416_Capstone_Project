import React, { useState } from "react";
import StateSelectionToolbar from "./StateSelectionToolbar";
import MapBox from "./MapBox";
import "./Components.css";

const StateSelectionMap = () => {
    const [selectedState, setSelectedState] = useState("");

    return (
        <div className="container">
            {/* State selection toolbar */}
            <StateSelectionToolbar
                onStateChange={setSelectedState}
                tentativeState={selectedState}
            />

            {/* Map component */}
            <MapBox selectedState={selectedState} />
        </div>
    );
};

export default StateSelectionMap;
