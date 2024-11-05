import React, { useState } from "react";
import StateSelectionToolbar from "../main_map/StateSelectionToolbar";
import "./States.css";
import LA_SMD from "./LA_components/LA_SMD";
import LA_MMD from "./LA_components/LA_MMD";
import LA_Map from "./LA_components/LA_Map";
import LA_PieChart from "./LA_components/LA_PieChart";
import LA_PieChartRace from "./LA_components/LA_PieChartRace";
import LA_Table from "./LA_components/LA_Table";
import LA_MMDPie from "./LA_components/LA_MMDPie";
import LA_SMDPieChart from "./LA_components/LA_SMDPie";

const California = () => {
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
                <LA_Map
                  selectedDistrict={selectedDistrict}
                  setSelectedDistrict={setSelectedDistrict}
                  selectedOptionMap={selectedOptionMap}
                />
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 50 }}>
                {selectedDistrict && (
                  <h1 className="center"> District: {selectedDistrict}</h1>
                )}
                <div className="center">
                  Click on a state to see district information
                </div>
              </div>
              <div className="second-half">
                <div className="pie-chart-container">
                  <LA_PieChart
                    selectedOptionMap={selectedOptionMap}
                    selectedDistrict={selectedDistrict}
                  />
                </div>
                <div className="pie-chart-container">
                  <LA_PieChartRace
                    selectedOptionMap={selectedOptionMap}
                    selectedDistrict={selectedDistrict}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="whole-page">
        <h className="page-header">Vote Distribution Across Districts</h>
        <div className="second-page">
          <div className="first-half-LA Chart">
            <LA_SMD />
          </div>
          <div className="second-half-LA Chart">
            <LA_MMD />
          </div>
        </div>
      </div>
      <div className="whole-page">
        <h className="page-header">Party Win Breakdown For SMD Scenarios</h>
        <div className="secondP-page">
          <div className="first-half Chart">
            <LA_SMDPieChart />
          </div>
          <div className="second-half Chart">
            <LA_MMDPie />
          </div>
        </div>
      </div>
      <div className="whole-page">
        <h className="page-header">SMD Data</h>
        <div className="third-page Table">
          <LA_Table />
        </div>
      </div>
    </>
  );
};

export default California;
