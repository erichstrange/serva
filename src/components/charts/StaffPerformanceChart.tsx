import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { staffMembers } from '../../data/mockData';

const StaffPerformanceChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={staffMembers}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis 
            yAxisId="left"
            label={{ value: 'Orders', angle: -90, position: 'insideLeft' }}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right"
            domain={[0, 5]}
            label={{ value: 'Rating', angle: 90, position: 'insideRight' }}
          />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="orders" fill="#3B82F6" name="Orders" />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="rating"
            stroke="#10B981"
            name="Rating"
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StaffPerformanceChart;