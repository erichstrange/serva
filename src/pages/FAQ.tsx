import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is RestaurantAI?",
        answer: "RestaurantAI is an AI-powered platform that helps restaurants optimize their operations through data analytics, smart inventory management, and predictive insights."
      },
      {
        question: "How can RestaurantAI benefit my restaurant?",
        answer: "Our platform helps reduce operational costs, optimize inventory, improve staff efficiency, and provide valuable insights for better decision-making."
      },
      {
        question: "Is RestaurantAI suitable for all restaurant sizes?",
        answer: "Yes, we offer different plans tailored to restaurants of all sizes, from single locations to large chains."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What technical requirements are needed to use RestaurantAI?",
        answer: "RestaurantAI is a cloud-based solution that works on any modern web browser. No special hardware or software installation is required."
      },
      {
        question: "Can RestaurantAI integrate with my existing POS system?",
        answer: "Yes, we support integration with major POS systems and can work with you to ensure smooth data synchronization."
      },
      {
        question: "How secure is my data?",
        answer: "We use enterprise-grade security measures and AWS infrastructure to ensure your data is always protected and encrypted."
      }
    ]
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "How much does RestaurantAI cost?",
        answer: "We offer flexible pricing plans starting at $99/month. Visit our pricing page for detailed information about each plan."
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial of our Professional plan so you can experience the full benefits of our platform."
      },
      {
        question: "Can I change plans later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
      }
    ]
  },
  {
    category: "Support",
    questions: [
      {
        question: "What kind of support do you offer?",
        answer: "We provide email support for all plans, with additional phone and priority support for Professional and Enterprise plans."
      },
      {
        question: "Is training provided?",
        answer: "Yes, we offer comprehensive onboarding and training resources, including documentation, video tutorials, and live support."
      },
      {
        question: "How can I contact support?",
        answer: "You can reach our support team through your dashboard, email, or phone (for eligible plans)."
      }
    ]
  }
];

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState<string | null>("General");
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenQuestions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about RestaurantAI
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {faqs.map((category) => (
            <div key={category.category} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleCategory(category.category)}
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {category.category}
                </h2>
                {openCategory === category.category ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {openCategory === category.category && (
                <div className="px-6 py-4 space-y-4">
                  {category.questions.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <button
                        className="w-full text-left flex items-center justify-between"
                        onClick={() => toggleQuestion(category.category, index)}
                      >
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.question}
                        </h3>
                        {openQuestions[`${category.category}-${index}`] ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {openQuestions[`${category.category}-${index}`] && (
                        <p className="mt-2 text-gray-600">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;