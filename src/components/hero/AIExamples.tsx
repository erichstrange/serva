import React, { useState, useEffect } from 'react';
import { Search, BarChart2, DollarSign, Clock, TrendingUp, Users, Package, Utensils } from 'lucide-react';

const examples = [
  {
    question: "What's my revenue trend for this week?",
    answer: [
      "Weekly Revenue Analysis:",
      "- Total: $42,850 (↑15% vs. last week)",
      "- Average ticket: $68 (↑8%)",
      "- Best performing day: Saturday ($9,240)"
    ],
    icon: DollarSign,
    chart: {
      type: 'line',
      data: [4200, 3800, 4500, 4100, 6200, 9240, 6800]
    }
  },
  {
    question: "Show kitchen efficiency metrics",
    answer: [
      "Kitchen Performance:",
      "- Avg. prep time: 12 min (↓2 min)",
      "- Order accuracy: 98.5%",
      "- Waste reduction: 15% improvement"
    ],
    icon: Utensils,
    chart: {
      type: 'bar',
      data: [92, 98.5, 85, 95]
    }
  },
  {
    question: "What are my busiest hours today?",
    answer: [
      "Peak Hours Analysis:",
      "- Current peak: 6-8 PM (95% capacity)",
      "- Secondary peak: 12-2 PM (82%)",
      "- Suggested staffing: +2 servers at 5:30 PM"
    ],
    icon: Clock,
    chart: {
      type: 'area',
      data: [20, 45, 82, 60, 40, 55, 95, 85, 70]
    }
  },
  {
    question: "Analyze inventory status",
    answer: [
      "Inventory Status:",
      "- 3 items below reorder point",
      "- Overstocked: Premium spirits",
      "- Suggested order: $3,245 (8 items)"
    ],
    icon: Package,
    chart: {
      type: 'radar',
      data: [85, 65, 78, 92, 88]
    }
  },
  {
    question: "How is staff performance today?",
    answer: [
      "Staff Metrics:",
      "- Top server: Sarah (32 tables, 4.9★)",
      "- Team efficiency: 94%",
      "- Upsell rate: 28% (↑5%)"
    ],
    icon: Users,
    chart: {
      type: 'bar',
      data: [94, 88, 92, 86, 90]
    }
  }
];

const AIExamples = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const Icon = examples[currentIndex].icon;

  useEffect(() => {
    setIsTyping(true);
    setShowAnswer(false);
    setDisplayedText('');
    setDisplayedAnswer([]);
    
    const question = examples[currentIndex].question;
    let charIndex = 0;
    
    const typeQuestion = setInterval(() => {
      if (charIndex < question.length) {
        setDisplayedText(prev => prev + question[charIndex]);
        charIndex++;
      } else {
        clearInterval(typeQuestion);
        setIsTyping(false);
        setTimeout(() => {
          setShowAnswer(true);
          typeAnswer();
        }, 500);
      }
    }, 50);

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % examples.length);
    }, 10000);

    return () => {
      clearInterval(typeQuestion);
      clearTimeout(timer);
    };
  }, [currentIndex]);

  const typeAnswer = () => {
    const answer = examples[currentIndex].answer;
    let lineIndex = 0;

    const typeAnswerLine = setInterval(() => {
      if (lineIndex < answer.length) {
        setDisplayedAnswer(prev => [...prev, answer[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(typeAnswerLine);
      }
    }, 200);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transition-all duration-500 border border-white/20">
      <div className="p-6">
        <div className="flex items-center gap-3 text-white">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Search className="text-blue-200" size={20} />
          </div>
          <div className="flex-1">
            <p className="font-medium">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </p>
          </div>
        </div>

        {showAnswer && (
          <div className="mt-4 pl-9">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                <Icon className="text-green-400" size={16} />
              </div>
              <div className="flex-1">
                {displayedAnswer.map((line, index) => (
                  <p 
                    key={index} 
                    className="text-blue-100 animate-fadeIn" 
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      opacity: 0,
                      animation: 'fadeIn 0.5s ease-out forwards'
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIExamples;