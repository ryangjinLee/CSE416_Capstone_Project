import React, { useState } from "react";
import StateSelectionToolbar from "../main_map/StateSelectionToolbar";
import "./States.css";
import NY_SMD from "./NY_components/NY_SMD";
import NY_MMD from "./NY_components/NY_MMD";
import NY_Map from "./NY_components/NY_Map";
import NY_PieChart from "./NY_components/NY_PieChart";
import NY_PieChartRace from "./NY_components/NY_PieChartRace";
import NY_Table from "./NY_components/NY_Table";

const NewYork = () => {
  const [selectedOptionMap, setSelectedOptionMap] = useState("SMD"); // State for the selected option
  const [selectedDistrict, setSelectedDistrict] = useState(null);

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
                    <h1>Select Districting Method</h1>
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
                <NY_Map selectedDistrict={selectedDistrict} setSelectedDistrict={setSelectedDistrict} />
              </div>
            </div>
            <div >
              <div style={{ marginBottom: 50 }}>
                {selectedDistrict && (
                  <h1 className="center"> District: {selectedDistrict}</h1>
                )}
                <div className="center">Click on a state to see district information</div>
              </div>
              <div className="second-half">
                <div className="pie-chart-container">
                  <NY_PieChart selectedOptionMap={selectedOptionMap} selectedDistrict={selectedDistrict} />
                </div>
                <div className="pie-chart-container">
                  <NY_PieChartRace selectedOptionMap={selectedOptionMap} selectedDistrict={selectedDistrict} />
                </div>
              </div>

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
          <NY_Table />
        </div>
      </div>
    </>
  );
};

export default NewYork;