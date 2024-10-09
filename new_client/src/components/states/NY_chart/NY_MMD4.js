import { Chart } from "react-google-charts";

const NY_SMD = () => {
  const data = [
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
    ["District 15", 91.82, 8.18],
    ["District 16", 91.82, 8.18],
    ["District 17", 91.82, 8.18],
    ["District 18", 91.82, 8.18],
    ["District 19", 91.82, 8.18],
    ["District 20", 91.82, 8.18],
    ["District 21", 91.82, 8.18],
    ["District 22", 91.82, 8.18],
    ["District 23", 91.82, 8.18],
    ["District 24", 91.82, 8.18],
    ["District 25", 91.82, 8.18],
    ["District 26", 91.82, 8.18],
    ["District 27", 91.82, 8.18],
  ];

  // Different options for non-material charts
  const options = {
    title: "Political Party Percentages",
    chartArea: { width: "50%", height: "80%" },
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

  return (
    <div>
      <Chart
        // Bar is the equivalent chart type for the material design version.
        chartType="BarChart"
        width="100%"
        height="800px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default NY_SMD;
