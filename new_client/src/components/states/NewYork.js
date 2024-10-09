import React, { useState } from "react";
import StateSelectionToolbar from "../main_map/StateSelectionToolbar";
import "./States.css"; // Ensure styles are in a separate CSS file
import NY_SMD from "./NY_chart/NY_SMD";

const NewYork = ({ onStateChange, tentativeState }) => {
  const [selectedOption, setSelectedOption] = useState(""); // State for the selected option
  const [selectedState, setSelectedState] = useState("");

  const handleChange = (e) => {
    const selectedState = e.target.value;
    onStateChange(selectedState); // Pass selected state back to parent component
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value); // Update selected option
  };

  const handleClick = () => {
    console.log("State selected:", tentativeState);
    console.log("Option selected:", selectedOption);
  };

  return (
    <div className="container">
      {/* State selection toolbar */}
      <StateSelectionToolbar
        onStateChange={setSelectedState}
        tentativeState={selectedState}
      />
      <div className="map-visual">
        <div className="select-container centerWithinMe">
          <label className="select-label">Select an Option:</label>
          <select
            id="option-selector"
            value={selectedOption}
            onChange={handleSelectChange}
            className="option-selector-dropdown"
          >
            <option disabled value="">
              -District Options-
            </option>
            <option value="SMD">SMD</option>
            <option value="MMD2">MMD/2</option>
            <option value="MMD3">MMD/3</option>
            <option value="MMD4">MMD/4</option>
            <option value="MMD5">MMD/5</option>
          </select>
        </div>
      </div>
      <div className="chart-visual">
        <NY_SMD />
      </div>
    </div>
  );
};

export default NewYork;
