import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';

const FeatureNotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isVisible) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setIsVisible(false), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Get notified about new features</span>
          </div>
          
          <form onSubmit={handleSubmit} className="flex-1 max-w-md mx-4">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                disabled={status === 'success'}
                required
              />
              <button
                type="submit"
                disabled={status === 'success'}
                className="px-4 py-1 bg-white text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-70"
              >
                {status === 'success' ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </form>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureNotificationBar;