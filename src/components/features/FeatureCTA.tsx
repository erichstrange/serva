import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const FeatureCTA = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-8 h-8 text-blue-200" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Join thousands of restaurants already optimizing their operations with AI.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/register"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
};

export default FeatureCTA;