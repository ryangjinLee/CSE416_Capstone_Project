import React, { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import ny_mmd_2_data from "../../../data/NY/box_mmd_2.json";
import ny_mmd_3_data from "../../../data/NY/box_mmd_3.json";
import ny_mmd_4_data from "../../../data/NY/box_mmd_4.json";
import ny_mmd_5_data from "../../../data/NY/box_mmd_5.json";

const NY_MMD = () => {
  const [selectedOptionCompare, setSelectedOptionCompare] = useState("MMD2");

  const handleSelectChangeCompare = (event) => {
    setSelectedOptionCompare(event.target.value);
  };

  const MMD2_total = ny_mmd_2_data.total;
  const MMD2_Democratic = ny_mmd_2_data.democratic;
  const MMD2_Republican = ny_mmd_2_data.republican;

  const MMD3_total = ny_mmd_3_data.total;
  const MMD3_Democratic = ny_mmd_3_data.democratic;
  const MMD3_Republican = ny_mmd_3_data.republican;

  const MMD4_total = ny_mmd_4_data.total;
  const MMD4_Democratic = ny_mmd_4_data.democratic;
  const MMD4_Republican = ny_mmd_4_data.republican;

  const MMD5_total = ny_mmd_5_data.total;
  const MMD5_Democratic = ny_mmd_5_data.democratic;
  const MMD5_Republican = ny_mmd_5_data.republican;

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

  const dataMapping = {
    MMD2: {
      data: MMD2_total,
      dem: MMD2_Democratic,
      rep: MMD2_Republican,
    },
    MMD3: {
      data: MMD3_total,
      dem: MMD3_Democratic,
      rep: MMD3_Republican,
    },
    MMD4: {
      data: MMD4_total,
      dem: MMD4_Democratic,
      rep: MMD4_Republican,
    },
    MMD5: {
      data: MMD5_total,
      dem: MMD5_Democratic,
      rep: MMD5_Republican,
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