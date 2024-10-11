import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
// Endpoint: "/party/ny"
import PartyData from "../../../data/NY/pie_party.json";

const NY_PieChart = (props) => {
  const [partyData, setPartyData] = useState([]);

  useEffect(() => {
    const jsonData = PartyData[props.selectedOptionMap];

    const calculatePartyTotals = async () => {
      let totalRepublicans = 0;
      let totalConservatives = 0;

      // Calculate the total for all districts
      jsonData.forEach((district) => {
        totalRepublicans += district.Republicans || 0;
        totalConservatives += district.Conservatives || 0;
      });

      const total = totalRepublicans + totalConservatives;

      // Calculate percentages
      const republicanPercentage = Math.round((totalRepublicans / total) * 100);
      const conservativePercentage = Math.round(
        (totalConservatives / total) * 100
      );

      // Set the initial party data with the totals across all districts
      await setPartyData([
        { name: "Republican", value: republicanPercentage },
        { name: "Conservative", value: conservativePercentage },
      ]);
    };

    // Function to calculate party totals for the selected district
    const calculateSelectedDistrictTotals = async () => {
      const selectedDistrictData = jsonData[Number(props.selectedDistrict) - 1];

      if (selectedDistrictData) {
        const republicanTotal = selectedDistrictData.Republicans || 0;
        const conservativeTotal = selectedDistrictData.Conservatives || 0;

        const total = republicanTotal + conservativeTotal;

        // Calculate percentages for the selected district
        const republicanPercentage = Math.round(
          (republicanTotal / total) * 100
        );
        const conservativePercentage = Math.round(
          (conservativeTotal / total) * 100
        );

        // Update party data with the selected district values
        await setPartyData([
          { name: "Republican", value: republicanPercentage },
          { name: "Conservative", value: conservativePercentage },
        ]);
      }
    };

    // If a district is selected, calculate the totals for that district; otherwise, calculate for all districts
    if (props.selectedDistrict) {
      calculateSelectedDistrictTotals();
    } else {
      calculatePartyTotals();
    }
  }, [props.selectedDistrict, props.selectedOptionMap]);

  const COLORS = ["#FF0000", "#0000FF"];

  // Custom tooltip function
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "5px",
            border: "1px solid #ccc",
          }}
        >
          <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: "100%", height: 300 }}>
      {partyData.length > 0 && (
        <ResponsiveContainer>
          <h3 className="center"> Party Information</h3>
          <PieChart>
            <Pie
              data={partyData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name} ${value}%`}
            >
              {partyData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={customTooltip} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default NY_PieChart;
