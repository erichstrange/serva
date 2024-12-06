import React from 'react';
import RevenueAnimation from './animations/RevenueAnimation';
import SatisfactionAnimation from './animations/SatisfactionAnimation';
import StaffAnimation from './animations/StaffAnimation';
import InventoryAnimation from './animations/InventoryAnimation';

const InsightAnimation = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="transform hover:scale-105 transition-transform duration-300">
        <RevenueAnimation />
      </div>
      <div className="transform hover:scale-105 transition-transform duration-300">
        <SatisfactionAnimation />
      </div>
      <div className="transform hover:scale-105 transition-transform duration-300">
        <StaffAnimation />
      </div>
      <div className="transform hover:scale-105 transition-transform duration-300">
        <InventoryAnimation />
      </div>
    </div>
  );
};

export default InsightAnimation;