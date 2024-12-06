import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { tableUtilization } from '../../data/mockData';

const TableUtilizationChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={tableUtilization}>
          <defs>
            <linearGradient id="colorUtilization" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Area
            type="monotone"
            dataKey="utilization"
            stroke="#10B981"
            fillOpacity={1}
            fill="url(#colorUtilization)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TableUtilizationChart;