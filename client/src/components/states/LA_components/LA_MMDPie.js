import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import Party_Data from '../../../data/LA/pie_party.json';

const LA_InteractivePie = () => {
  const [chartData, setChartData] = useState([]);
  const [dataType, setDataType] = useState("MMD2");

  useEffect(() => {
    updateChartData();
  }, [dataType]);
  const updateChartData = () => {
    let newData = [];
    switch (dataType) {
      case "MMD2":
        newData = calculatePartyTotals("MMD2");
        break;
      case "MMD3":
        newData = calculatePartyTotals("MMD3");
        break;
      case "MMD4":
        newData = calculatePartyTotals("MMD4");
        break;
      case "MMD5":
        newData = calculatePartyTotals("MMD5");
        break;
      default:
        newData = calculatePartyTotals("MMD2");
    }
    setChartData(newData);
  };

  const calculatePartyTotals = (districting) => {
    let republican_Count = 0;
    let democratic_Count = 0;

    const SMD_Data = Party_Data[districting]

    SMD_Data.forEach(district => {
      if (district.Republican > district.Democratic){
        republican_Count++
      }else{
        democratic_Count++
      }
    });

    const total = republican_Count + democratic_Count;
    const republicanPercentage = Math.round((republican_Count / total) * 100);
    const democraticPercentage = Math.round((democratic_Count / total) * 100);

    return [
      { name: 'Republican', value: republicanPercentage },
      { name: 'Democratic', value: democraticPercentage },
    ]
  };

  const COLORS = ["#FF0000", "#0000FF"];

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
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name} ${value}%`}
          >
            {chartData.map((entry, index) => (
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
      <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '1.5em', fontWeight: 'bold' }}>
        MMD
      </div>
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        {["MMD2", "MMD3", "MMD4", "MMD5"].map((type) => (
          <label key={type} style={{ margin: "0 10px" }}>
            <input
              type="radio"
              value={type}
              checked={dataType === type}
              onChange={(e) => setDataType(e.target.value)}
            />
            {type}
          </label>
        ))}
        
      </div>
    </div>
  );
};

export default LA_InteractivePie;