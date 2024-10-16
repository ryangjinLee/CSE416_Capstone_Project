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
      { name: 'Alaska Native', value: defaultTotals.Alaska_Native || 0 },
      { name: 'Black', value: defaultTotals.Black || 0 },
      { name: 'Asian', value: defaultTotals.Asian || 0 },
      { name: 'Pacific Islander', value: defaultTotals.Pacific_Islander || 0 },
      { name: 'Other', value: defaultTotals.Other || 0 },
      { name: 'Multiracial', value: defaultTotals.Multiracial || 0 },
    ];
  });

  useEffect(() => {
    const totalData = RaceData[props.selectedOptionMap]?.total || {}; // Default to "total" data
    const districtData = RaceData[props.selectedOptionMap]?.district || []; // District data array

    const calculateRaceTotalsForAllDistricts = async () => {
      let totalWhite = 0;
      let totalAlaska_Native = 0;
      let totalBlack = 0;
      let totalAsian = 0;
      let total_Pacific_Islander = 0;
      let totalOther = 0;
      let totalMultiracial = 0;

      // Sum up the totals for all districts
      districtData.forEach((district) => {
        totalWhite += district.White || 0;
        totalAlaska_Native += district.Alaska_Native || 0;
        totalBlack += district.Black || 0;
        totalAsian += district.Asian || 0;
        total_Pacific_Islander += district.Pacific_Islander || 0;
        totalOther += district.Other || 0;
        totalMultiracial += district.Multiracial || 0;
      });

      const total = totalWhite + totalAlaska_Native + totalBlack + totalAsian + total_Pacific_Islander + totalOther + totalMultiracial;

      // Calculate percentages for all districts combined
      const whitePercentage = Math.round((totalWhite / total) * 100);
      const Alaska_NativePercentage = Math.round((totalAlaska_Native / total) * 100);
      const blackPercentage = Math.round((totalBlack / total) * 100);
      const asianPercentage = Math.round((totalAsian / total) * 100);
      const Pacific_IslanderPercentage = Math.round((total_Pacific_Islander / total) * 100);
      const OtherPercentage = Math.round((totalOther / total) * 100);
      const MultiracialPercentage = Math.round((totalMultiracial / total) * 100);

      // Set the race data with the totals across all districts
      await setRaceData([
        { name: 'White', value: whitePercentage },
        { name: 'Alaska Native', value: Alaska_NativePercentage },
        { name: 'Black', value: blackPercentage },
        { name: 'Asian', value: asianPercentage },
        { name: 'Pacific Islander', value: Pacific_IslanderPercentage },
        { name: 'Other', value: OtherPercentage },
        { name: 'Multiracial', value: MultiracialPercentage },
      ]);
    };

    const calculateSelectedDistrictRaceTotals = async () => {
      const selectedDistrictIndex = Number(props.selectedDistrict) - 1;
      const selectedDistrictData = districtData[selectedDistrictIndex]; // Get the selected district's data

      if (selectedDistrictData) {
        let whiteTotal = selectedDistrictData.White || 0;
        let Alaska_NativeTotal = selectedDistrictData.Alaska_Native || 0;
        let blackTotal = selectedDistrictData.Black || 0;
        let asianTotal = selectedDistrictData.Asian || 0;
        let Pacific_IslanderTotal = selectedDistrictData.Pacific_Islander || 0;
        let OtherTotal = selectedDistrictData.Other || 0;
        let MultiracialTotal = selectedDistrictData.Multiracial || 0;

        const total = whiteTotal + Alaska_NativeTotal + blackTotal + asianTotal + Pacific_IslanderTotal + OtherTotal + MultiracialTotal;

        // Calculate percentages for the selected district
        const whitePercentage = Math.round((whiteTotal / total) * 100);
        const Alaska_NativePercentage = Math.round((Alaska_NativeTotal / total) * 100);
        const blackPercentage = Math.round((blackTotal / total) * 100);
        const asianPercentage = Math.round((asianTotal / total) * 100);
        const Pacific_IslanderPercentage = Math.round((Pacific_IslanderTotal / total) * 100);
        const OtherPercentage = Math.round((OtherTotal / total) * 100);
        const MultiracialPercentage = Math.round((MultiracialTotal / total) * 100);

        // Update race data with the selected district's values
        await setRaceData([
          { name: 'White', value: whitePercentage },
          { name: 'Alaska Native', value: Alaska_NativePercentage },
          { name: 'Black', value: blackPercentage },
          { name: 'Asian', value: asianPercentage },
          { name: 'Pacific Islander', value: Pacific_IslanderPercentage },
          { name: 'Other', value: OtherPercentage },
          { name: 'Multiracial', value: MultiracialPercentage },
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
        { name: 'Alaska Native', value: Math.round(totalData.Alaska_Native * 100) || 0 },
        { name: 'Black', value: Math.round(totalData.Black * 100) || 0 },
        { name: 'Asian', value: Math.round(totalData.Asian * 100) || 0 },
        { name: 'Pacific Islander', value: Math.round(totalData.Pacific_Islander * 100) || 0 },
        { name: 'Other', value: Math.round(totalData.Other * 100) || 0 },
        { name: 'Multiracial', value: Math.round(totalData.Multiracial * 100) || 0 },
      ]);
    }
  }, [props.selectedDistrict, props.selectedOptionMap]);

  // Update this line to use vivid colors
  const COLORS = ['#FF4136', '#FF851B', '#2ECC40', '#0074D9', '#6e1f05', '#41092d', '#6de0f4'];

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
            label={({ name, value }) => (value > 0 ? `${name} ${value}%` : null)} // Only show label if value > 0
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