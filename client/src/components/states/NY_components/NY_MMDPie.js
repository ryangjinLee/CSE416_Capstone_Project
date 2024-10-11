import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const NY_InteractivePie = () => {
  var data_Total = [];
  const [SMD_data_Total, setSMD_data_Total] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const SMD_data_Total_response = await getData(
          "/district-party/total_Data/SMD"
        );
        setSMD_data_Total(SMD_data_Total_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });
  const [MMD2_data_Total, setMMD2_data_Total] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MMD2_data_Total_response = await getData(
          "/district-party/total_Data/MMD2"
        );
        setMMD2_data_Total(MMD2_data_Total_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });
  const [MMD3_data_Total, setMMD3_data_Total] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MMD3_data_Total_response = await getData(
          "/district-party/total_Data/MMD3"
        );
        setMMD3_data_Total(MMD3_data_Total_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });
  const [MMD4_data_Total, setMMD4_data_Total] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MMD4_data_Total_response = await getData(
          "/district-party/total_Data/MMD4"
        );
        setMMD4_data_Total(MMD4_data_Total_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });
  const [MMD5_data_Total, setMMD5_data_Total] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MMD5_data_Total_response = await getData(
          "/district-party/total_Data/MMD5"
        );
        setMMD5_data_Total(MMD5_data_Total_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });
  const [chartData, setChartData] = useState([]);
  const [dataType, setDataType] = useState("MMD2");

  useEffect(() => {
    updateChartData();
  }, [dataType]);
  const updateChartData = () => {
    let newData = [];
    switch (dataType) {
      case "MMD2":
        data_Total = MMD2_data_Total;
        newData = calculateMMD2Data();
        break;
      case "MMD3":
        data_Total = MMD3_data_Total;
        newData = calculateMMD3Data();
        break;
      case "MMD4":
        data_Total = MMD4_data_Total;
        newData = calculateMMD4Data();
        break;
      case "MMD5":
        data_Total = MMD5_data_Total;
        newData = calculateMMD5Data();
        break;
      default:
        data_Total = SMD_data_Total;
        newData = calculateMMD2Data();
    }
    setChartData(newData);
  };
  var totalVotes = data_Total;

  const getOutcome = () => {
    const republican = Math.floor(Math.random() * (71 - 40) + 40); // Random number between 40 and 70
    const democrat = 100 - republican;
    return [
      { name: "Republican", value: republican },
      { name: "Democrat", value: democrat },
    ];
  };

  const calculateMMD2Data = () => {
    return getOutcome();
  };

  const calculateMMD3Data = () => {
    return getOutcome();
  };

  const calculateMMD4Data = () => {
    return getOutcome();
  };

  const calculateMMD5Data = () => {
    return getOutcome();
  };

  //   const calculateMMDData = (mmdSize) => {
  //     const districtCount = Object.keys(EthnicityData).length;
  //     const mmdCount = Math.floor(districtCount / mmdSize);

  //     let republicanTotal = 0;
  //     let democratTotal = 0;
  //     let totalVotes = 0;

  //     Object.values(EthnicityData).slice(0, mmdCount * mmdSize).forEach(district => {
  //       republicanTotal += district.Republicans || 0;
  //       democratTotal += district.Democrats || 0;
  //       totalVotes += (district.Republicans || 0) + (district.Democrats || 0);
  //     });

  //     return [
  //       { name: 'Republican', value: Math.round((republicanTotal / totalVotes) * 100) },
  //       { name: 'Democrat', value: Math.round((democratTotal / totalVotes) * 100) },
  //     ];
  //   };

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
        {totalVotes}
      </ResponsiveContainer>
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
  const getData = () => {};
};

export default NY_InteractivePie;
