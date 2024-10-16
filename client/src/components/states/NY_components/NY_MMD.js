import React, { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";
import { getData } from "../../../api"; // Assuming you have a function to fetch data from your API
import "ag-charts-enterprise";

const NY_MMD = () => {
  const [selectedOptionCompare, setSelectedOptionCompare] = useState("MMD2");
  const [mmdData, setMmdData] = useState({
    MMD2: { total: [], democratic: [], republican: [] },
    MMD3: { total: [], democratic: [], republican: [] },
    MMD4: { total: [], democratic: [], republican: [] },
    MMD5: { total: [], democratic: [], republican: [] },
  });

  const handleSelectChangeCompare = (event) => {
    setSelectedOptionCompare(event.target.value);
  };

  useEffect(() => {
    const fetchMmdData = async (mmdType) => {
      try {
        const response = await getData(`/boxplot/ny/${mmdType.toLowerCase()}`);
        setMmdData((prevState) => ({
          ...prevState,
          [mmdType]: response.value, // Assuming the response contains total, democratic, and republican
        }));
      } catch (error) {
        console.error(`Error fetching ${mmdType} data:`, error);
      }
    };

    // Fetch data for the selected option if not already fetched
    if (mmdData[selectedOptionCompare].total.length === 0) {
      fetchMmdData(selectedOptionCompare);
    }
  }, [selectedOptionCompare]);

  const { total, democratic, republican } = mmdData[selectedOptionCompare];

  const [options, setOptions] = useState({
    title: {
      text: "New York Multi Member District",
      fontSize: 24,
    },
    subtitle: {
      text: "Political Voting Percentage by District",
    },
    data: [], // Initialize with empty data
    series: [
      {
        type: "box-plot",
        direction: "vertical",
        yName: "Voting Percentage",
        yKey: "percentage",
        xName: "District Number",
        xKey: "district",
        minKey: "min",
        minName: "Min",
        q1Key: "q1",
        q1Name: "Q1",
        medianKey: "median",
        medianName: "Median",
        q3Key: "q3",
        q3Name: "Q3",
        maxKey: "max",
        maxName: "Max",
      },
      {
        data: [],
        type: "scatter",
        xKey: "district",
        yKey: "percentage",
        yName: "Democratic",
        fill: "#0000FF",
        stroke: "#0000FF",
      },
      {
        data: [],
        type: "scatter",
        xKey: "district",
        yKey: "percentage",
        yName: "Republican",
        fill: "#FF0000",
        stroke: "#FF0000",
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: {
          text: "District", // Updated x-axis label
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Percentages (%)", // Updated y-axis label
        },
        nice: true,
      },
    ],
  });

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      data: total, // Update box plot data
      series: [
        prevOptions.series[0],
        {
          ...prevOptions.series[1],
          data: democratic, // Democratic scatter points
        },
        {
          ...prevOptions.series[2],
          data: republican, // Republican scatter points
        },
      ],
    }));
  }, [total, democratic, republican]);

  return (
    <div>
      <AgCharts style={{ width: "45vw", height: "80vh" }} options={options} />
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
