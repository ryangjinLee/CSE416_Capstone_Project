import React, { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";

import { getData } from "../../../api";

// endpoint: /box/ny/smd
import "ag-charts-enterprise";

const NY_Box = () => {
  const [smd, setSMDData] = useState(null); // Initialize smd to null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const smd_boxplot = await getData("/boxplot/ny/smd");
        setSMDData(smd_boxplot.value); // Update smd state when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Add an empty dependency array to ensure it runs only once

  const [options, setOptions] = useState({
    title: {
      text: "New York Single Member District",
      fontSize: 24,
    },
    subtitle: {
      text: "Political Voting Percentage by District",
    },
    data: [], // Initially empty, to be updated later
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
      // Democratic scatter points with blue color (placeholder for now)
      {
        data: [], // Initially empty, will be updated later
        type: "scatter",
        xKey: "district",
        yKey: "percentage",
        yName: "Democratic",
        fill: "#0000FF",
        stroke: "#0000FF",
      },
      // Republican scatter points with red color (placeholder for now)
      {
        data: [], // Initially empty, will be updated later
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
    if (smd) {
      setOptions((prevOptions) => ({
        ...prevOptions,
        data: smd.total, // Update box plot data when smd is available
        series: [
          {
            ...prevOptions.series[0], // Keep the box-plot series as is
            data: smd.total, // Use smd.total for box-plot
          },
          {
            ...prevOptions.series[1], // Democratic scatter points
            data: smd.democratic, // Use smd.democratic for scatter plot
          },
          {
            ...prevOptions.series[2], // Republican scatter points
            data: smd.republican, // Use smd.republican for scatter plot
          },
        ],
      }));
    }
  }, [smd]); // Run this effect whenever smd changes

  return (
    <div>
      <AgCharts style={{ width: "45vw", height: "80vh" }} options={options} />
    </div>
  );
};

export default NY_Box;
