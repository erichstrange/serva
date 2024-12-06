import React, { useState } from 'react';
import { Search, Loader } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything... (e.g., 'What is my profit margin for this month?')"
          className="w-full px-4 py-3 pl-12 pr-12 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors shadow-sm"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Search size={20} />
        </div>
        {isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Loader size={20} className="animate-spin text-blue-500" />
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchBar;