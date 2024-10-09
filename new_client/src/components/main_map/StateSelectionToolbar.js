import React from "react";
import { useNavigate } from "react-router-dom";
import "./Components.css"; // Ensure styles are here

const StateSelectionToolbar = ({ onStateChange, tentativeState }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    const selectedState = e.target.value;
    onStateChange(selectedState); // Pass selected state back to parent component
  };

  const handleClick = () => {
    console.log("State selected:", tentativeState);
    navigate("/" + tentativeState);
  };

  return (
    <div className="toolbar">
      <div className="centerWithinMe">
        <h5 className="align_text">Selector Menu</h5>
        <select
          id="state-selector"
          onChange={handleChange}
          value={tentativeState} // Controlled input for tentative state
          className="state-selector-dropdown"
        >
          <option disabled value="">
            -Select-
          </option>
          <option value="California">California</option>
          <option value="Mississippi">Mississippi</option>
          <option value="NewYork">New York</option>
        </select>
        <button className="redBrownBtn" onClick={handleClick}>
          Select this State!
        </button>
      </div>
    </div>
  );
};

export default StateSelectionToolbar;
