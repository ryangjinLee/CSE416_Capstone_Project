import React, { useState } from "react";
import { useEffect } from "react";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";

const NY_MMD = () => {
  const [selectedOptionCompare, setSelectedOptionCompare] = useState("MMD2");

  const handleSelectChangeCompare = (event) => {
    setSelectedOptionCompare(event.target.value);
  };

  const MMD2_data = [
    {
      district: "District 1",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 2",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 3",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 4",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 5",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 6",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 7",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 8",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 9",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 10",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 11",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 12",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 13",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
  ];

  const MMD3_data = [
    {
      district: "District 1",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 2",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 3",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 4",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 5",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 6",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 7",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 8",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 9",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
  ];

  const MMD4_data = [
    {
      district: "District 1",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 2",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 3",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 4",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 5",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 6",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 7",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
  ];

  const MMD5_data = [
    {
      district: "District 1",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 2",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 3",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 4",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 5",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "District 6",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
  ];

  const MMD2_Democratic = [
    { district: "District 1", percentage: 55 },
    { district: "District 2", percentage: 55 },
    { district: "District 3", percentage: 55 },
    { district: "District 4", percentage: 55 },
    { district: "District 5", percentage: 55 },
    { district: "District 6", percentage: 55 },
    { district: "District 7", percentage: 55 },
    { district: "District 8", percentage: 55 },
    { district: "District 9", percentage: 55 },
    { district: "District 10", percentage: 55 },
    { district: "District 11", percentage: 55 },
    { district: "District 12", percentage: 55 },
    { district: "District 13", percentage: 55 },
  ];
  const MMD3_Democratic = [
    { district: "District 1", percentage: 55 },
    { district: "District 2", percentage: 55 },
    { district: "District 3", percentage: 55 },
    { district: "District 4", percentage: 55 },
    { district: "District 5", percentage: 55 },
    { district: "District 6", percentage: 55 },
    { district: "District 7", percentage: 55 },
    { district: "District 8", percentage: 55 },
    { district: "District 9", percentage: 55 },
  ];
  const MMD4_Democratic = [
    { district: "District 1", percentage: 55 },
    { district: "District 2", percentage: 55 },
    { district: "District 3", percentage: 55 },
    { district: "District 4", percentage: 55 },
    { district: "District 5", percentage: 55 },
    { district: "District 6", percentage: 55 },
    { district: "District 7", percentage: 55 },
  ];
  const MMD5_Democratic = [
    { district: "District 1", percentage: 55 },
    { district: "District 2", percentage: 55 },
    { district: "District 3", percentage: 55 },
    { district: "District 4", percentage: 55 },
    { district: "District 5", percentage: 55 },
    { district: "District 6", percentage: 55 },
  ];

  const MMD2_Republican = [
    { district: "District 1", percentage: 35 },
    { district: "District 2", percentage: 35 },
    { district: "District 3", percentage: 35 },
    { district: "District 4", percentage: 35 },
    { district: "District 5", percentage: 35 },
    { district: "District 6", percentage: 35 },
    { district: "District 7", percentage: 35 },
    { district: "District 8", percentage: 35 },
    { district: "District 9", percentage: 35 },
    { district: "District 10", percentage: 35 },
    { district: "District 11", percentage: 35 },
    { district: "District 12", percentage: 35 },
    { district: "District 13", percentage: 35 },
  ];
  const MMD3_Republican = [
    { district: "District 1", percentage: 35 },
    { district: "District 2", percentage: 35 },
    { district: "District 3", percentage: 35 },
    { district: "District 4", percentage: 35 },
    { district: "District 5", percentage: 35 },
    { district: "District 6", percentage: 35 },
    { district: "District 7", percentage: 35 },
    { district: "District 8", percentage: 35 },
    { district: "District 9", percentage: 35 },
  ];
  const MMD4_Republican = [
    { district: "District 1", percentage: 35 },
    { district: "District 2", percentage: 35 },
    { district: "District 3", percentage: 35 },
    { district: "District 4", percentage: 35 },
    { district: "District 5", percentage: 35 },
    { district: "District 6", percentage: 35 },
    { district: "District 7", percentage: 35 },
  ];
  const MMD5_Republican = [
    { district: "District 1", percentage: 35 },
    { district: "District 2", percentage: 35 },
    { district: "District 3", percentage: 35 },
    { district: "District 4", percentage: 35 },
    { district: "District 5", percentage: 35 },
    { district: "District 6", percentage: 35 },
  ];
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
      data: MMD2_data,
      dem: MMD2_Democratic,
      rep: MMD2_Republican,
    },
    MMD3: {
      data: MMD3_data,
      dem: MMD3_Democratic,
      rep: MMD3_Republican,
    },
    MMD4: {
      data: MMD4_data,
      dem: MMD4_Democratic,
      rep: MMD4_Republican,
    },
    MMD5: {
      data: MMD5_data,
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
