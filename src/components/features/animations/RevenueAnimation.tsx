import React from 'react';
import { LineChart } from 'lucide-react';

const RevenueAnimation = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <LineChart className="w-6 h-6 text-green-500" />
        <span className="text-base font-medium text-gray-600">Revenue Trend</span>
      </div>
      <div className="space-y-2">
        {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
          <div key={i} className="h-2 bg-green-500/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full animate-grow"
              style={{ 
                width: `${height}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-sm">
        <span className="text-gray-500">Last 7 Days</span>
        <span className="text-green-500">+15.8%</span>
      </div>
    </div>
  );
};

export default RevenueAnimation;