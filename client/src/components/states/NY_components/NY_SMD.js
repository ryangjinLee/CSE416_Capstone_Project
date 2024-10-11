import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";

function get_SMD_Data() {
  return [
    {
      district: "1",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "2",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "3",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "4",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "5",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "6",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "7",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "8",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "9",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "10",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "11",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "12",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "13",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "14",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "15",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "16",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "17",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "18",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "19",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "20",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "21",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "22",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "23",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "24",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "25",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
    {
      district: "26",
      min: 0,
      q1: 10,
      median: 20,
      q3: 30,
      max: 100,
    },
  ];
}

function get_SMD_Democratic() {
  return [
    { district: "1", percentage: 55 },
    { district: "2", percentage: 55 },
    { district: "3", percentage: 55 },
    { district: "4", percentage: 55 },
    { district: "5", percentage: 55 },
    { district: "6", percentage: 55 },
    { district: "7", percentage: 55 },
    { district: "8", percentage: 55 },
    { district: "9", percentage: 55 },
    { district: "10", percentage: 55 },
    { district: "11", percentage: 55 },
    { district: "12", percentage: 55 },
    { district: "13", percentage: 55 },
    { district: "14", percentage: 55 },
    { district: "15", percentage: 55 },
    { district: "16", percentage: 55 },
    { district: "17", percentage: 55 },
    { district: "18", percentage: 55 },
    { district: "19", percentage: 55 },
    { district: "20", percentage: 55 },
    { district: "21", percentage: 55 },
    { district: "22", percentage: 55 },
    { district: "23", percentage: 55 },
    { district: "24", percentage: 55 },
    { district: "25", percentage: 55 },
    { district: "26", percentage: 55 },
  ];
}

function get_SMD_Republican() {
  return [
    { district: "1", percentage: 35 },
    { district: "2", percentage: 35 },
    { district: "3", percentage: 35 },
    { district: "4", percentage: 35 },
    { district: "5", percentage: 35 },
    { district: "6", percentage: 35 },
    { district: "7", percentage: 35 },
    { district: "8", percentage: 35 },
    { district: "9", percentage: 35 },
    { district: "10", percentage: 35 },
    { district: "11", percentage: 35 },
    { district: "12", percentage: 35 },
    { district: "13", percentage: 35 },
    { district: "14", percentage: 35 },
    { district: "15", percentage: 35 },
    { district: "16", percentage: 35 },
    { district: "17", percentage: 35 },
    { district: "18", percentage: 35 },
    { district: "19", percentage: 35 },
    { district: "20", percentage: 35 },
    { district: "21", percentage: 35 },
    { district: "22", percentage: 35 },
    { district: "23", percentage: 35 },
    { district: "24", percentage: 35 },
    { district: "25", percentage: 35 },
    { district: "26", percentage: 35 },
  ];
}

const NY_Box = () => {
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
      <AgCharts style={{ width: "45vw", height: "80vh" }} options={options} />
    </div>
  );
};

export default NY_Box;
