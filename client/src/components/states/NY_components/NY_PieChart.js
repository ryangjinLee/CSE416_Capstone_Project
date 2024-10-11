import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import EthnicityData from '../../../data/NY/EthnicityData.json';

const NY_PieChart = () => {
  const [partyData, setPartyData] = useState([]);

  useEffect(() => {
    const calculatePartyTotals = () => {
      let republicanTotal = 0;
      let democratTotal = 0;

      Object.values(EthnicityData).forEach(district => {
        republicanTotal += district.Republicans || 0;
        democratTotal += district.Conservatives || 0;
      });


      const total = republicanTotal + democratTotal;
      const republicanPercentage = Math.round((republicanTotal / total) * 100);
      const democratPercentage = Math.round((democratTotal / total) * 100);

      setPartyData([
        { name: 'Republican', value: republicanPercentage },
        { name: 'Democrat', value: democratPercentage },
      ]);
    };

    calculatePartyTotals();
  }, []);

  const COLORS = ['#FF0000', '#0000FF'];

  // Add this custom tooltip function
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
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={customTooltip} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NY_PieChart;
