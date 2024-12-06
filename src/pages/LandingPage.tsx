import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  Brain, 
  Database, 
  TrendingUp, 
  Users, 
  Shield, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import AIExamples from '../components/hero/AIExamples';

const HeroSection = () => (
  <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Transform Your Restaurant with{' '}
            <span className="text-blue-200">AI-Powered Insights</span>
          </h1>
          <p className="mt-6 text-xl text-blue-100">
            Optimize operations, reduce costs, and make data-driven decisions with our comprehensive AI dashboard.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/login"
              className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 bg-opacity-20 hover:bg-opacity-30 md:py-4 md:text-lg md:px-10"
            >
              Log In
            </Link>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-6">
          <AIExamples />
        </div>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Powerful Features for Modern Restaurants
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Everything you need to optimize your restaurant operations in one place.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: <Brain className="h-8 w-8 text-blue-500" />,
            title: "AI-Powered Insights",
            description: "Get instant answers to your business questions with our advanced AI technology."
          },
          {
            icon: <Database className="h-8 w-8 text-blue-500" />,
            title: "Smart Document Management",
            description: "Upload and analyze invoices, menus, and documents with intelligent data extraction."
          },
          {
            icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
            title: "Real-Time Analytics",
            description: "Monitor sales, inventory, and staff performance with live dashboards."
          },
          {
            icon: <Users className="h-8 w-8 text-blue-500" />,
            title: "Staff Management",
            description: "Optimize scheduling and track employee performance effortlessly."
          },
          {
            icon: <Shield className="h-8 w-8 text-blue-500" />,
            title: "Secure & Reliable",
            description: "Enterprise-grade security with AWS infrastructure and multi-tenant architecture."
          },
          {
            icon: <BarChart2 className="h-8 w-8 text-blue-500" />,
            title: "Custom Reports",
            description: "Generate detailed reports and forecasts for better decision-making."
          }
        ].map((feature, index) => (
          <div key={index} className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BenefitsSection = () => (
  <div className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Why Choose RestaurantAI?
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Join hundreds of restaurants already optimizing their operations.
        </p>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            "Reduce operational costs by up to 25%",
            "Improve inventory management efficiency",
            "Increase staff productivity and satisfaction",
            "Make data-driven decisions with real-time insights",
            "Streamline document processing and analysis",
            "Enhanced security and compliance"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="text-lg text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CTASection = () => (
  <div className="bg-blue-600">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        <span className="block">Ready to transform your restaurant?</span>
        <span className="block text-blue-200">Start your free trial today.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;