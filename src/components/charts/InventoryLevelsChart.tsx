import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { inventoryCategories } from '../../data/mockData';

const InventoryLevelsChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={inventoryCategories}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Stock Level"
            dataKey="stock"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.5}
          />
          <Tooltip formatter={(value) => `${value}%`} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryLevelsChart;