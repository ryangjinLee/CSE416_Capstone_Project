import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import EthnicityData from '../../../data/NY/EthnicityData.json';

const NY_PieChartRace = (props) => {
  const [raceData, setRaceData] = useState([
    { name: 'White', value: 56 },
    { name: 'Hispanic', value: 19 },
    { name: 'Black', value: 15 },
    { name: 'Asian', value: 10 },
  ]);
  
  useEffect(() => {
    const jsonData = EthnicityData;
    const selectedDistrictData = jsonData[Number(props.selectedDistrict) - 1];

    const calculateRaceTotals = async () => {
      let White = selectedDistrictData?.White || 0;
      let Hispanic = selectedDistrictData?.Hispanic || 0;
      let Black = selectedDistrictData?.Black || 0;
      let Asian = selectedDistrictData?.Asian || 0;

      const WhitePercentage = Math.round(White * 100);
      const HispanicPercentage = Math.round(Hispanic * 100);
      const BlackPercentage = Math.round(Black * 100);
      const AsianPercentage = Math.round(Asian * 100);

      await setRaceData([
        { name: 'White', value: WhitePercentage },
        { name: 'Hispanic', value: HispanicPercentage },
        { name: 'Black', value: BlackPercentage },
        { name: 'Asian', value: AsianPercentage },
      ]);
    };
    props.selectedDistrict && calculateRaceTotals();
  }, [props.selectedDistrict]);

  // Update this line to use vivid colors
  const COLORS = ['#FF4136', '#FF851B', '#2ECC40', '#0074D9'];

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
              data={raceData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({name, value}) => `${name} ${value}%`}
          >
            {raceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={customTooltip}/>
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NY_PieChartRace;
