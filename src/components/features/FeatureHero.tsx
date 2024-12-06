import React from 'react';
import { Brain } from 'lucide-react';

const FeatureHero = () => {
  return (
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
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Transform your restaurant operations with our comprehensive suite of AI-powered tools
            and analytics designed for the future of hospitality.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
    </div>
  );
};

export default FeatureHero;