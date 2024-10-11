import React, { useState } from "react";
import StateSelectionToolbar from "../main_map/StateSelectionToolbar";
import "./States.css"; // Ensure styles are in a separate CSS file
import NY_SMD from "./NY_components/NY_SMD";
import NY_MMD from "./NY_components/NY_MMD";
import NY_Map from "./NY_components/NY_Map";

const NewYork = () => {
  const [selectedOptionMap, setSelectedOptionMap] = useState("SMD"); // State for the selected option

  const handleSelectChangeMap = (event) => {
    setSelectedOptionMap(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="whole-page">
          <div className="first-page">
            <div className="first-half">
              <div className="outer-container">
                <div className="select-container centerWithinMe">
                  <label className="select-label">
                    <b>Select District Method</b>
                  </label>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="districtMethodMap"
                        value="SMD"
                        checked={selectedOptionMap === "SMD"}
                        onChange={handleSelectChangeMap}
                      />
                      SMD
                    </label>

                    <label className="radio-margin">
                      <input
                        type="radio"
                        name="districtMethodMap"
                        value="MMD2"
                        checked={selectedOptionMap === "MMD2"}
                        onChange={handleSelectChangeMap}
                      />
                      MMD:2
                    </label>

                    <label className="radio-margin">
                      <input
                        type="radio"
                        name="districtMethodMap"
                        value="MMD3"
                        checked={selectedOptionMap === "MMD3"}
                        onChange={handleSelectChangeMap}
                      />
                      MMD:3
                    </label>

                    <label className="radio-margin">
                      <input
                        type="radio"
                        name="districtMethodMap"
                        value="MMD4"
                        checked={selectedOptionMap === "MMD4"}
                        onChange={handleSelectChangeMap}
                      />
                      MMD:4
                    </label>

                    <label className="radio-margin">
                      <input
                        type="radio"
                        name="districtMethodMap"
                        value="MMD5"
                        checked={selectedOptionMap === "MMD5"}
                        onChange={handleSelectChangeMap}
                      />
                      MMD:5
                    </label>
                  </div>
                </div>
                <NY_Map />
              </div>
            </div>
            <div className="second-half">
              {/* 여기 NY_SMD지우고 Race Popularity */}
              <NY_SMD />
            </div>
          </div>
        </div>
      </div>
      <div className="whole-page">
        <div className="second-page">
          <div className="first-half Chart">
            <NY_SMD />
          </div>
          <div className="second-half Chart">
            <NY_MMD />
          </div>
        </div>
      </div>
      <div className="whole-page">
        <div className="third-page">
          {/* 여기에 Comparison Table 넣으면 됨 */}
          <NY_SMD />
        </div>
      </div>
    </>
  );
};

export default NewYork;
