import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { menuItems } from '../../data/mockData';

const PopularItemsChart = () => {
  const sortedItems = [...menuItems]
    .sort((a, b) => b.orders - a.orders)
    .slice(0, 5)
    .map(item => ({
      name: item.name,
      orders: item.orders
    }));

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sortedItems}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopularItemsChart;