import React, { useState } from "react";
import { Chart } from "react-google-charts";

const NY_MMD = () => {
  const [selectedOptionCompare, setSelectedOptionCompare] = useState("MMD2");

  const handleSelectChangeCompare = (event) => {
    setSelectedOptionCompare(event.target.value);
  };

  const MMD2_data = [
    ["Parties", "Democratic", "Republican"],
    ["District 1", 91.82, 8.18],
    ["District 2", 91.82, 8.18],
    ["District 3", 91.82, 8.18],
    ["District 4", 91.82, 8.18],
    ["District 5", 91.82, 8.18],
    ["District 6", 91.82, 8.18],
    ["District 7", 91.82, 8.18],
    ["District 8", 91.82, 8.18],
    ["District 9", 91.82, 8.18],
    ["District 10", 91.82, 8.18],
    ["District 11", 91.82, 8.18],
    ["District 12", 91.82, 8.18],
    ["District 13", 91.82, 8.18],
    ["District 14", 91.82, 8.18],
  ];

  const MMD3_data = [
    ["Parties", "Democratic", "Republican"],
    ["District 1", 91.82, 8.18],
    ["District 2", 91.82, 8.18],
    ["District 3", 91.82, 8.18],
    ["District 4", 91.82, 8.18],
    ["District 5", 91.82, 8.18],
    ["District 6", 91.82, 8.18],
    ["District 7", 91.82, 8.18],
    ["District 8", 91.82, 8.18],
    ["District 9", 91.82, 8.18],
  ];

  const MMD4_data = [
    ["Parties", "Democratic", "Republican"],
    ["District 1", 91.82, 8.18],
    ["District 2", 91.82, 8.18],
    ["District 3", 91.82, 8.18],
    ["District 4", 91.82, 8.18],
    ["District 5", 91.82, 8.18],
    ["District 6", 91.82, 8.18],
    ["District 7", 91.82, 8.18],
  ];

  const MMD5_data = [
    ["Parties", "Democratic", "Republican"],
    ["District 1", 91.82, 8.18],
    ["District 2", 91.82, 8.18],
    ["District 3", 91.82, 8.18],
    ["District 4", 91.82, 8.18],
    ["District 5", 91.82, 8.18],
    ["District 6", 91.82, 8.18],
  ];

  // Different options for non-material charts
  const options = {
    title: `New York Multi-Member: ${selectedOptionCompare}`, // Dynamic title
    chartArea: { width: "60%", height: "80%" },
    isStacked: true,
    hAxis: {
      title: "Percentage of Votes (%)",
      minValue: 0,
      maxValue: 100,
    },
    vAxis: {
      title: "District",
    },
  };

  // Determine which data to use based on selected option
  const chartData = () => {
    switch (selectedOptionCompare) {
      case "MMD3":
        return MMD3_data;
      case "MMD4":
        return MMD4_data;
      case "MMD5":
        return MMD5_data;
      case "MMD2":
      default:
        return MMD2_data;
    }
  };

  return (
    <div>
      <Chart
        chartType="BarChart"
        width="100%"
        height="800px"
        data={chartData()} // Use dynamic data
        options={options}
      />
      <div className="center">
        <div>
          <label className="radio-margin">
            <input
              type="radio"
              name="districtMethodCompare"
              value="MMD2"
              checked={selectedOptionCompare === "MMD2"}
              onChange={handleSelectChangeCompare}
            />
            MMD:2
          </label>

          <label className="radio-margin">
            <input
              type="radio"
              name="districtMethodCompare"
              value="MMD3"
              checked={selectedOptionCompare === "MMD3"}
              onChange={handleSelectChangeCompare}
            />
            MMD:3
          </label>

          <label className="radio-margin">
            <input
              type="radio"
              name="districtMethodCompare"
              value="MMD4"
              checked={selectedOptionCompare === "MMD4"}
              onChange={handleSelectChangeCompare}
            />
            MMD:4
          </label>

          <label className="radio-margin">
            <input
              type="radio"
              name="districtMethodCompare"
              value="MMD5"
              checked={selectedOptionCompare === "MMD5"}
              onChange={handleSelectChangeCompare}
            />
            MMD:5
          </label>
        </div>
      </div>
    </div>
  );
};

export default NY_MMD;
