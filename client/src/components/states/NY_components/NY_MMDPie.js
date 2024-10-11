import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import EthnicityData from '../../../data/NY/EthnicityData.json';

const NY_InteractivePie = () => {
  const [chartData, setChartData] = useState([]);
  const [dataType, setDataType] = useState('MMD2');

  useEffect(() => {
    updateChartData();
  }, [dataType]);
  const updateChartData = () => {
    let newData = [];
    switch (dataType) {
      case 'MMD2':
        newData = calculateMMD2Data();
        break;
      case 'MMD3':
        newData = calculateMMD3Data();
        break;
      case 'MMD4':
        newData = calculateMMD4Data();
        break;
      case 'MMD5':
        newData = calculateMMD5Data();
        break;
      default:
        newData = calculateMMD2Data();
    }
    setChartData(newData);
  };

  const generateRandomPercentages = () => {
    const republican = Math.floor(Math.random() * (71 - 40) + 40); // Random number between 40 and 70
    const democrat = 100 - republican;
    return [
      { name: 'Republican', value: republican },
      { name: 'Democrat', value: democrat },
    ];
  };

  const calculateMMD2Data = () => {
    return generateRandomPercentages();
  };

  const calculateMMD3Data = () => {
    return generateRandomPercentages();
  };

  const calculateMMD4Data = () => {
    return generateRandomPercentages();
  };

  const calculateMMD5Data = () => {
    return generateRandomPercentages();
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

  const COLORS = ['#FF0000', '#0000FF'];

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
          <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: 500 }}>
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={customTooltip} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        {['MMD2', 'MMD3', 'MMD4', 'MMD5'].map((type) => (
          <label key={type} style={{ margin: '0 10px' }}>
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

export default NY_InteractivePie;
