import React from 'react';
import { Brain } from 'lucide-react';
import EmailSubscription from '../components/features/EmailSubscription';
import FeatureCategory from '../components/features/FeatureCategory';
import FeatureCTA from '../components/features/FeatureCTA';
import { featureCategories } from '../data/featureCategories';

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-blue-200" />
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl mb-4">
              Powerful Features for Modern Restaurants
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Transform your restaurant operations with our comprehensive suite of AI-powered tools
              and analytics designed for the future of hospitality.
            </p>
            <EmailSubscription />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      </div>
      
      {/* Feature Categories */}
      <div className="relative">
        {featureCategories.map((category, index) => (
          <div
            key={index}
            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            <FeatureCategory 
              {...category} 
              showAnimation={index === 0}
            />
          </div>
        ))}
      </div>

      <FeatureCTA />
    </div>
  );
};

export default Features;