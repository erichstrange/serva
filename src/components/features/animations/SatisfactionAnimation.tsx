import React from 'react';
import { Heart } from 'lucide-react';

const SatisfactionAnimation = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="w-6 h-6 text-pink-500" />
        <span className="text-base font-medium text-gray-600">Customer Satisfaction</span>
      </div>
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="56"
            className="fill-none stroke-gray-200"
            strokeWidth="12"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            className="fill-none stroke-pink-500 animate-circle"
            strokeWidth="12"
            strokeDasharray="352.56"
            strokeDashoffset="28.20"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">92%</span>
          <span className="text-sm text-gray-500">Satisfied</span>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionAnimation;