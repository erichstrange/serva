import React from 'react';
import { LucideIcon } from 'lucide-react';
import InsightAnimation from './InsightAnimation';

interface FeatureCategoryProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  showAnimation?: boolean;
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({
  title,
  description,
  icon: Icon,
  features,
  showAnimation
}) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-12">
          <div className="lg:w-1/3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-2/3">
            {showAnimation && (
              <div className="mb-12">
                <InsightAnimation />
              </div>
            )}
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={index}
                    className="relative p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                      <FeatureIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCategory;