import React from 'react';
import { BarChart2, Target, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              About RestaurantAI
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              We're on a mission to revolutionize restaurant management through artificial intelligence
              and data-driven insights.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              To empower restaurants of all sizes with cutting-edge AI technology,
              making data-driven decision-making accessible and intuitive.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Target className="h-8 w-8 text-blue-600" />,
                  title: "Our Vision",
                  description: "To become the leading AI-powered platform for restaurant management, helping businesses thrive in the digital age."
                },
                {
                  icon: <Users className="h-8 w-8 text-blue-600" />,
                  title: "Our Team",
                  description: "A diverse group of experts in AI, restaurant operations, and software development, dedicated to your success."
                },
                {
                  icon: <Globe className="h-8 w-8 text-blue-600" />,
                  title: "Our Impact",
                  description: "Helping restaurants worldwide optimize operations, reduce costs, and provide better dining experiences."
                }
              ].map((item, index) => (
                <div key={index} className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
          </div>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600">
              Founded in 2024, RestaurantAI emerged from a simple observation: restaurants were
              drowning in data but starving for insights. Our founders, having worked in both the
              restaurant industry and AI technology sector, saw an opportunity to bridge this gap.
            </p>
            <p className="text-gray-600 mt-4">
              We started by building a simple tool to help restaurant owners understand their data
              better. Today, we've grown into a comprehensive platform that helps hundreds of
              restaurants optimize their operations, reduce costs, and improve customer experience.
            </p>
            <p className="text-gray-600 mt-4">
              Our commitment to innovation and customer success has made us a trusted partner in
              the restaurant industry, and we're just getting started.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with AI in restaurant management."
              },
              {
                title: "Customer Success",
                description: "Your success is our success. We're committed to helping you achieve your business goals."
              },
              {
                title: "Transparency",
                description: "We believe in being open and honest about our technology and business practices."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from our technology to our customer service."
              }
            ].map((value, index) => (
              <div key={index} className="relative p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Join us in shaping the future of restaurant management.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;