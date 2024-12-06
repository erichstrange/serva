import React from 'react';
import { Package } from 'lucide-react';

const InventoryAnimation = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Package className="w-6 h-6 text-orange-500" />
        <span className="text-base font-medium text-gray-600">Inventory Health</span>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Stock Level</span>
            <span className="text-green-500">92%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full animate-grow"
              style={{ width: '92%' }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Waste Rate</span>
            <span className="text-orange-500">3%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-orange-500 rounded-full animate-grow"
              style={{ width: '3%', animationDelay: '0.2s' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryAnimation;