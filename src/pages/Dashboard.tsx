import React from 'react';
import { TrendingUp, Users, DollarSign, ShoppingCart, ArrowUpRight, ArrowDownRight, Package, Trash2, Clock, Table } from 'lucide-react';
import RevenueChart from '../components/charts/RevenueChart';
import PopularItemsChart from '../components/charts/PopularItemsChart';
import PeakHoursChart from '../components/charts/PeakHoursChart';
import InventoryLevelsChart from '../components/charts/InventoryLevelsChart';
import StaffPerformanceChart from '../components/charts/StaffPerformanceChart';
import WasteMetricsChart from '../components/charts/WasteMetricsChart';
import CustomerRetentionChart from '../components/charts/CustomerRetentionChart';
import TableUtilizationChart from '../components/charts/TableUtilizationChart';
import CostBreakdownChart from '../components/charts/CostBreakdownChart';

const StatCard = ({ title, value, change, icon: Icon, isPositive = true }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        <div className="flex items-center mt-2">
          {isPositive ? (
            <ArrowUpRight size={16} className="text-green-500" />
          ) : (
            <ArrowDownRight size={16} className="text-red-500" />
          )}
          <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        </div>
      </div>
      <div className="p-3 bg-blue-50 rounded-lg">
        <Icon size={24} className="text-blue-500" />
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Welcome back, John</h1>
        <p className="text-gray-600">Here's what's happening with your restaurant today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Daily Revenue"
          value="$8,429"
          change="12% vs last week"
          icon={DollarSign}
          isPositive={true}
        />
        <StatCard
          title="Table Turnover"
          value="4.8x"
          change="0.3x vs target"
          icon={Table}
          isPositive={true}
        />
        <StatCard
          title="Avg Wait Time"
          value="12 min"
          change="3 min improvement"
          icon={Clock}
          isPositive={true}
        />
        <StatCard
          title="Food Waste"
          value="4.2%"
          change="2.1% improvement"
          icon={Trash2}
          isPositive={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Revenue Trends</h2>
          <RevenueChart />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Table Utilization</h2>
          <TableUtilizationChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Customer Retention</h2>
          <CustomerRetentionChart />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Cost Breakdown</h2>
          <CostBreakdownChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Popular Items</h2>
          <PopularItemsChart />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Staff Performance</h2>
          <StaffPerformanceChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Inventory Levels</h2>
          <InventoryLevelsChart />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Waste Analysis</h2>
          <WasteMetricsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;