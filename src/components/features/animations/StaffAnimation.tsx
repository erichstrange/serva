import React from 'react';
import { Users } from 'lucide-react';

const StaffAnimation = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-6 h-6 text-blue-500" />
        <span className="text-base font-medium text-gray-600">Staff Optimization</span>
      </div>
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[90, 85, 95, 75].map((value, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="h-24 w-full bg-gray-100 rounded-lg relative overflow-hidden">
              <div 
                className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg animate-grow-vertical"
                style={{ 
                  height: `${value}%`,
                  animationDelay: `${i * 0.15}s`
                }}
              />
            </div>
            <span className="text-sm text-gray-500 mt-2">
              {['Morning', 'Afternoon', 'Evening', 'Night'][i]}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Shift Coverage</span>
        <span className="text-blue-500">92% Optimal</span>
      </div>
    </div>
  );
};

export default StaffAnimation;