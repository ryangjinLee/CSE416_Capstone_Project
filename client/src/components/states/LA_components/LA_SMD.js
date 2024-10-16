import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

// endpoint: /box/LA/smd
import la_smd from "../../../data/LA/box_smd.json"
import "ag-charts-enterprise";


function get_SMD_Data() {
  return la_smd.total
}
function get_SMD_Democratic() {
  return la_smd.democratic
}

function get_SMD_Republican() {
  return la_smd.republican
}

const LA_Box = () => {
  const [options, setOptions] = useState({
    title: {
      text: "New York Single Member District",
      fontSize: 24,
    },
    subtitle: {
      text: "Political Voting Percentage by District",
    },
    data: get_SMD_Data(),
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

      // Democratic scatter points with blue color
      {
        data: get_SMD_Democratic(),
        type: "scatter",
        xKey: "district",
        yKey: "percentage",
        yName: "Democratic",
        fill: "#0000FF",
        stroke: "#0000FF",
      },
      // Republican scatter points with red color
      {
        data: get_SMD_Republican(),
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

  return (
    <div>
      <AgCharts style={{ width: "55vw", height: "80vh" }} options={options} />
    </div>
  );
};

export default LA_Box;