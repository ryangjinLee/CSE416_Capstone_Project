import React, { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import MS_mmd_2_data from "../../../data/MS/box_mmd_2.json";
const MS_MMD = () => {
  const [selectedOptionCompare, setSelectedOptionCompare] = useState("MMD2");

  const handleSelectChangeCompare = (event) => {
    setSelectedOptionCompare(event.target.value);
  };

  const MMD2_total = MS_mmd_2_data.total; 
  const MMD2_Democratic = MS_mmd_2_data.democratic; 
  const MMD2_Republican = MS_mmd_2_data.republican; 


  const [options, setOptions] = useState({
    title: {
      text: "Mississippi Multi Member District",
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

  const dataMapping = {
    MMD2: {
      data: MMD2_total,
      dem: MMD2_Democratic,
      rep: MMD2_Republican,
    },
  };

  useEffect(() => {
    const { data, dem, rep } = dataMapping[selectedOptionCompare];

    setOptions((prevOptions) => ({
      ...prevOptions,
      data: data,
      series: [
        prevOptions.series[0],
        {
          ...prevOptions.series[1],
          data: dem,
        },
        {
          ...prevOptions.series[2],
          data: rep,
        },
      ],
    }));
  }, [selectedOptionCompare]);

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
        </div>
      </div>
    </div>
  );
};

export default MS_MMD;
