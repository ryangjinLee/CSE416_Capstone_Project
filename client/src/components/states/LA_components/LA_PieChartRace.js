import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
// endpoint: "/race/LA/"
import RaceData from '../../../data/LA/pie_race.json'

const LA_PieChartRace = (props) => {
  const [raceData, setRaceData] = useState(() => {
    // Default to total values from RaceData
    const defaultTotals = RaceData[props.selectedOptionMap]?.total || {};
    return [
      { name: 'White', value: defaultTotals.White || 0 },
      { name: 'Hispanic', value: defaultTotals.Hispanic || 0 },
      { name: 'Black', value: defaultTotals.Black || 0 },
      { name: 'Asian', value: defaultTotals.Asian || 0 },
      { name: 'Other', value: defaultTotals.Other || 0 },
    ];
  });

  useEffect(() => {
    const totalData = RaceData[props.selectedOptionMap]?.total || {}; // Default to "total" data
    const districtData = RaceData[props.selectedOptionMap]?.district || []; // District data array

    const calculateRaceTotalsForAllDistricts = async () => {
      let totalWhite = 0;
      let totalHispanic = 0;
      let totalBlack = 0;
      let totalAsian = 0;
      let totalOther = 0;

      // Sum up the totals for all districts
      districtData.forEach((district) => {
        totalWhite += district.White || 0;
        totalHispanic += district.Hispanic || 0;
        totalBlack += district.Black || 0;
        totalAsian += district.Asian || 0;
        totalOther += district.Other || 0;
      });

      const total = totalWhite + totalHispanic + totalBlack + totalAsian + totalOther;

      // Calculate percentages for all districts combined
      const whitePercentage = Math.round((totalWhite / total) * 100);
      const hispanicPercentage = Math.round((totalHispanic / total) * 100);
      const blackPercentage = Math.round((totalBlack / total) * 100);
      const asianPercentage = Math.round((totalAsian / total) * 100);
      const otherPercentage = Math.round((totalOther / total) * 100);

      // Set the race data with the totals across all districts
      await setRaceData([
        { name: 'White', value: whitePercentage },
        { name: 'Hispanic', value: hispanicPercentage },
        { name: 'Black', value: blackPercentage },
        { name: 'Asian', value: asianPercentage },
        { name: 'Other', value: otherPercentage },
      ]);
    };

    const calculateSelectedDistrictRaceTotals = async () => {
      const selectedDistrictIndex = Number(props.selectedDistrict) - 1;
      const selectedDistrictData = districtData[selectedDistrictIndex]; // Get the selected district's data

      if (selectedDistrictData) {
        let whiteTotal = selectedDistrictData.White || 0;
        let hispanicTotal = selectedDistrictData.Hispanic || 0;
        let blackTotal = selectedDistrictData.Black || 0;
        let asianTotal = selectedDistrictData.Asian || 0;
        let otherTotal = selectedDistrictData.Other || 0;

        const total = whiteTotal + hispanicTotal + blackTotal + asianTotal + otherTotal;

        // Calculate percentages for the selected district
        const whitePercentage = Math.round((whiteTotal / total) * 100);
        const hispanicPercentage = Math.round((hispanicTotal / total) * 100);
        const blackPercentage = Math.round((blackTotal / total) * 100);
        const asianPercentage = Math.round((asianTotal / total) * 100);
        const otherPercentage = Math.round((otherTotal / total) * 100);

        // Update race data with the selected district's values
        await setRaceData([
          { name: 'White', value: whitePercentage },
          { name: 'Hispanic', value: hispanicPercentage },
          { name: 'Black', value: blackPercentage },
          { name: 'Asian', value: asianPercentage },
          { name: 'Other', value: otherPercentage },
        ]);
      }
    };

    // If a district is selected, calculate the totals for that district; otherwise, use totals for all districts
    if (props.selectedDistrict) {
      calculateSelectedDistrictRaceTotals();
    } else {
      // Use total values if no district is selected
      setRaceData([
        { name: 'White', value: Math.round(totalData.White * 100) || 0 },
        { name: 'Hispanic', value: Math.round(totalData.Hispanic * 100) || 0 },
        { name: 'Black', value: Math.round(totalData.Black * 100) || 0 },
        { name: 'Asian', value: Math.round(totalData.Asian * 100) || 0 },
        { name: 'Other', value: Math.round(totalData.Other * 100) || 0 },
      ]);
    }
  }, [props.selectedDistrict, props.selectedOptionMap]);

  // Update this line to use vivid colors
  const COLORS = ['#FF4136', '#FF851B', '#2ECC40', '#0074D9', '#827D21'];

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
        <h3 className='center'>Racial Information</h3>
        <PieChart>
          <Pie
            data={raceData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name} ${value}%`}
          >
            {raceData.map((entry, index) => (
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

export default LA_PieChartRace;