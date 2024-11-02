import React, { useState } from "react";
import StateSelectionToolbar from "../main_map/StateSelectionToolbar";
import "./States.css";
import MS_SMD from "./MS_components/MS_SMD";
import MS_MMD from "./MS_components/MS_MMD";
import MS_Map from "./MS_components/MS_Map";
import MS_PieChart from "./MS_components/MS_PieChart";
import MS_PieChartRace from "./MS_components/MS_PieChartRace";
import MS_Table from "./MS_components/MS_Table";
import MS_MMDPie from "./MS_components/MS_MMDPie";
import MS_SMDPieChart from "./MS_components/MS_SMDPie";

const Mississippi = () => {
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
                <MS_Map
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
                  <MS_PieChart
                    selectedOptionMap={selectedOptionMap}
                    selectedDistrict={selectedDistrict}
                  />
                </div>
                <div className="pie-chart-container">
                  <MS_PieChartRace
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
          <div className="first-half Chart">
            <MS_SMD />
          </div>
          <div className="second-half Chart">
            <MS_MMD />
          </div>
        </div>
      </div>
      <div className="whole-page">
        <h className="page-header">Party Win Breakdown For SMD Scenarios</h>
        <div className="secondP-page">
          <div className="first-half Chart">
            <MS_SMDPieChart />
          </div>
          <div className="second-half Chart">
            <MS_MMDPie />
          </div>
        </div>
      </div>
      <div className="whole-page">
        <h className="page-header">SMD Data</h>
        <div className="third-page Table">
          <MS_Table />
        </div>
      </div>
    </>
  );
};

export default Mississippi;
