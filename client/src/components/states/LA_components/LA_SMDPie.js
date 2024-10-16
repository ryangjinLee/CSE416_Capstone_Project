import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Party_Data from '../../../data/LA/pie_party.json';
import {getData} from "../../../api";

const LA_SMDPieChart = () => {
  const [partyData, setPartyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const LAParty_Data = await getData('/ethnicity/LA');
        console.log(LAParty_Data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  });

  useEffect(() => {
    const calculatePartyTotals = () => {
      let republican_Count = 0;
      let democratic_Count = 0;

      const SMD_Data = Party_Data["SMD"]

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

      setPartyData([
        { name: 'Republican', value: republicanPercentage },
        { name: 'Democratic', value: democraticPercentage },
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
    <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={partyData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={110}
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
      <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '1.5em', fontWeight: 'bold' }}>
        SMD
      </div>
    </div>
  );
};

export default LA_SMDPieChart;