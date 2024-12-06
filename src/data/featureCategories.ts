import {
  Brain,
  Search,
  TrendingUp,
  Database,
  BarChart2,
  Bell,
  Calendar,
  Users,
  Leaf,
  Shield,
  Smartphone,
  Headphones
} from 'lucide-react';

export const featureCategories = [
  {
    title: "Smart AI-Powered Insights",
    description: "Harness the power of artificial intelligence to transform your operations",
    icon: Brain,
    features: [
      {
        title: "Natural Language Queries",
        description: "Ask questions in plain English and get instant, actionable insights",
        icon: Search
      },
      {
        title: "Predictive Analytics",
        description: "Forecast sales, inventory needs, and staffing requirements",
        icon: TrendingUp
      },
      {
        title: "Smart Recommendations",
        description: "Get AI-powered suggestions for menu optimization and pricing",
        icon: Database
      }
    ]
  },
  {
    title: "Operations & Analytics",
    description: "Streamline your operations with real-time data and insights",
    icon: BarChart2,
    features: [
      {
        title: "Real-Time Monitoring",
        description: "Track performance metrics and get instant alerts",
        icon: Bell
      },
      {
        title: "Staff Management",
        description: "Optimize scheduling and track staff performance",
        icon: Users
      },
      {
        title: "Resource Planning",
        description: "Efficiently manage inventory and reduce waste",
        icon: Calendar
      }
    ]
  },
  {
    title: "Efficiency & Sustainability",
    description: "Optimize costs while promoting environmental responsibility",
    icon: Leaf,
    features: [
      {
        title: "Waste Reduction",
        description: "Track and minimize food waste with smart inventory management",
        icon: TrendingUp
      },
      {
        title: "Resource Optimization",
        description: "Maximize efficiency of utilities and resource usage",
        icon: Shield
      },
      {
        title: "Mobile Access",
        description: "Manage your restaurant from anywhere with our mobile app",
        icon: Smartphone
      }
    ]
  },
  {
    title: "Support & Security",
    description: "Enterprise-grade security with 24/7 expert support",
    icon: Headphones,
    features: [
      {
        title: "24/7 Support",
        description: "Get help whenever you need it from our expert team",
        icon: Headphones
      },
      {
        title: "Data Protection",
        description: "Keep your data safe with enterprise-grade security",
        icon: Shield
      },
      {
        title: "Easy Integration",
        description: "Connect seamlessly with your existing tools",
        icon: Database
      }
    ]
  }
];