import React from 'react';
import { Link } from 'react-router-dom';
import { Check, HelpCircle } from 'lucide-react';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  isPopular = false,
  ctaText = "Get Started" 
}) => (
  <div className={`relative bg-white rounded-2xl shadow-sm ${isPopular ? 'border-2 border-blue-500' : 'border border-gray-200'}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      </div>
    )}
    <div className="p-8">
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="mt-4 text-sm text-gray-500">{description}</p>
      <p className="mt-8">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        <span className="text-base font-medium text-gray-500">/month</span>
      </p>
      <Link
        to="/register"
        className={`mt-8 block w-full py-3 px-6 rounded-lg text-center font-medium ${
          isPopular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
        }`}
      >
        {ctaText}
      </Link>
    </div>
    <div className="pt-6 pb-8 px-8">
      <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
        What's included
      </h4>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex space-x-3">
            <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
            <span className="text-sm text-gray-500">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FAQ = ({ question, answer }) => (
  <div className="pt-6">
    <dt className="text-lg">
      <button className="text-left w-full flex justify-between items-start text-gray-900">
        <span className="font-medium">{question}</span>
        <span className="ml-6 h-7 flex items-center">
          <HelpCircle className="h-5 w-5 text-blue-500" />
        </span>
      </button>
    </dt>
    <dd className="mt-2 pr-12">
      <p className="text-base text-gray-500">{answer}</p>
    </dd>
  </div>
);

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "99",
      description: "Perfect for small restaurants getting started with analytics.",
      features: [
        "Access to main dashboard",
        "Basic AI-powered insights",
        "Up to 3 integrations",
        "Real-time alerts",
        "Email support",
        "1 location",
        "Basic reporting"
      ]
    },
    {
      name: "Professional",
      price: "199",
      description: "Everything you need for a growing restaurant business.",
      isPopular: true,
      features: [
        "Everything in Starter, plus:",
        "Advanced AI insights",
        "Unlimited integrations",
        "Custom dashboards",
        "Priority support",
        "Up to 3 locations",
        "Advanced analytics",
        "Staff performance tracking",
        "Inventory optimization"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Custom solutions for large or multi-location restaurants.",
      ctaText: "Contact Sales",
      features: [
        "Everything in Professional, plus:",
        "Custom AI solutions",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited locations",
        "Custom integrations",
        "Advanced security features",
        "Training and onboarding",
        "Custom reporting"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does the pricing work?",
      answer: "Our pricing is subscription-based and billed monthly. Each plan includes a set of features designed to meet different business needs. Custom pricing is available for enterprise customers."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for our Professional plan, allowing you to explore all features before making a decision."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, including Visa, Mastercard, and American Express. Enterprise customers can also pay via invoice."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Choose the perfect plan for your restaurant. All plans include access to our core features.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <PricingTier key={tier.name} {...tier} />
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQ key={index} {...faq} />
            ))}
          </dl>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;