import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: "How AI is Transforming Restaurant Management",
    excerpt: "Discover how artificial intelligence is revolutionizing the way restaurants operate, from inventory management to customer service.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "5 Ways to Reduce Food Waste in Your Restaurant",
    excerpt: "Learn practical strategies to minimize food waste and increase profitability in your restaurant operations.",
    author: "Michael Chen",
    date: "March 10, 2024",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Future of Restaurant Analytics",
    excerpt: "Explore how data analytics and AI are shaping the future of restaurant decision-making and customer experience.",
    author: "David Wilson",
    date: "March 5, 2024",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              RestaurantAI Blog
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Insights, tips, and trends for modern restaurant management
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User size={16} className="mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar size={16} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <Link
                  to="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest insights and updates delivered to your inbox
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;